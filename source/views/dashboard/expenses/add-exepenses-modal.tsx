import { Button } from "@ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@ui/dialog"
import { Input } from "@ui/input"
import { Label } from "@ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui/select"
import { useState } from "react"
import { Calendar } from "@ui/calendar"
import { format } from "date-fns"
import { ro } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover"
import { cn } from "@/theme/lib/utils"
import type { Expense, ExpenseCategory } from "./expenses.data"
import { VisuallyHidden } from "../components/visually-hidden"

interface AddExpenseModalProps {
	open: boolean
	onOpenChange: (open: boolean) => void
	onSubmit: (data: Expense) => void
}

// function to generate the id
const generateId = () => {
	return Date.now().toString() + Math.floor(Math.random() * 1000).toString()
}

export default function AddExpenseModal({
	open,
	onOpenChange,
	onSubmit,
}: AddExpenseModalProps) {
	// initialize formData with default values
	const [formData, setFormData] = useState({
		apartmentId: "",
		category: "",
		description: "",
		amount: "",
		date: undefined as Date | undefined,
	})

	// function to reset the form
	const resetForm = () => {
		setFormData({
			apartmentId: "",
			category: "",
			description: "",
			amount: "",
			date: undefined,
		})
	}

	// handle the closing of the modal
	const handleOpenChange = (newOpen: boolean) => {
		if (!newOpen) {
			resetForm()
		}
		onOpenChange(newOpen)
	}

	// handle the submission of the form
	const handleSubmit = () => {
		// basic validation
		if (!formData.apartmentId || !formData.category || !formData.date) {
			alert("Te rugăm să completezi toate câmpurile obligatorii!")
			return
		}

		// create the expense object
		const expense: Expense = {
			id: generateId(),
			apartmentId: formData.apartmentId,
			category: formData.category as ExpenseCategory,
			description: formData.description,
			amount: Number.parseFloat(formData.amount) || 0,
			date: format(formData.date, "yyyy-MM-dd"),
		}

		// send the data
		onSubmit(expense)

		// close the modal
		handleOpenChange(false)
	}

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogContent
				className="sm:max-w-[425px]"
				aria-describedby="Adaugă cheltuială nouă"
				aria-labelledby="Adaugă cheltuială nouă"
			>
				<DialogHeader aria-describedby="Header" aria-labelledby="Header">
					<DialogTitle aria-describedby="Title" aria-labelledby="Title">
						Adaugă cheltuială nouă
					</DialogTitle>
					<DialogDescription
						aria-describedby="Description"
						aria-labelledby="Description"
					>
						Adaugă o nouă cheltuială pentru apartament
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid gap-2">
						<Label htmlFor="apartment">Apartament</Label>
						<Select
							value={formData.apartmentId}
							onValueChange={(value) =>
								setFormData({ ...formData, apartmentId: value })
							}
						>
							<SelectTrigger>
								<SelectValue placeholder="Selectează apartamentul" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="ap101">Apartament 101</SelectItem>
								<SelectItem value="ap102">Apartament 102</SelectItem>
								<SelectItem value="ap103">Apartament 103</SelectItem>
								<SelectItem value="ap104">Apartament 104</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="grid gap-2">
						<Label htmlFor="category">Categorie</Label>
						<Select
							value={formData.category}
							onValueChange={(value) => setFormData({ ...formData, category: value })}
						>
							<SelectTrigger>
								<SelectValue placeholder="Selectează categoria" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="utilities">Utilități</SelectItem>
								<SelectItem value="maintenance">Întreținere</SelectItem>
								<SelectItem value="repairs">Reparații</SelectItem>
								<SelectItem value="cleaning">Curățenie</SelectItem>
								<SelectItem value="other">Altele</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="grid gap-2">
						<Label htmlFor="description">Descriere</Label>
						<Input
							id="description"
							value={formData.description}
							onChange={(e) =>
								setFormData({ ...formData, description: e.target.value })
							}
							placeholder="Ex: Schimbare capac WC"
						/>
					</div>

					<div className="grid gap-2">
						<Label htmlFor="amount">Sumă (RON)</Label>
						<Input
							id="amount"
							type="number"
							value={formData.amount}
							onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
							placeholder="100"
						/>
					</div>

					<div className="grid gap-2">
						<Label>Data</Label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant="outline"
									className={cn(
										"justify-start text-left font-normal",
										!formData.date && "text-muted-foreground",
									)}
								>
									<CalendarIcon className="mr-2 h-4 w-4" />
									{formData.date
										? format(formData.date, "PPP", { locale: ro })
										: "Alege data"}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0">
								<Calendar
									mode="single"
									selected={formData.date}
									onSelect={(date) =>
										setFormData({ ...formData, date: date || undefined })
									}
									locale={ro}
								/>
							</PopoverContent>
						</Popover>
					</div>
				</div>
				<DialogFooter aria-describedby="Footer" aria-labelledby="Footer">
					<Button
						onClick={() => handleOpenChange(false)}
						variant="outline"
						aria-describedby="Cancel"
						aria-labelledby="Cancel"
					>
						Anulează
					</Button>
					<Button onClick={handleSubmit} aria-describedby="Save" aria-labelledby="Save">
						Salvează
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
