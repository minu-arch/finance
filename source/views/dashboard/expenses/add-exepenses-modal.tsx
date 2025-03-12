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

interface AddExpenseModalProps {
	open: boolean
	onOpenChange: (open: boolean) => void
	onSubmit: (data: Expense) => void
}

export default function AddExpenseModal({
	open,
	onOpenChange,
	onSubmit,
}: AddExpenseModalProps) {
	const [formData, setFormData] = useState({
		apartmentId: "",
		category: "",
		description: "",
		amount: "",
		date: undefined as Date | undefined,
	})

	const handleSubmit = () => {
		if (!formData.apartmentId || !formData.category || !formData.date) {
			return // Adaugă validare
		}

		onSubmit({
			id: crypto.randomUUID(),
			apartmentId: formData.apartmentId,
			category: formData.category as ExpenseCategory,
			description: formData.description,
			amount: Number.parseFloat(formData.amount) || 0,
			date: format(formData.date, "yyyy-MM-dd"),
		})

		onOpenChange(false)
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Adaugă cheltuială nouă</DialogTitle>
					<DialogDescription>
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
									onSelect={(date) => setFormData({ ...formData, date })}
									locale={ro}
								/>
							</PopoverContent>
						</Popover>
					</div>
				</div>
				<DialogFooter>
					<Button onClick={() => onOpenChange(false)} variant="outline">
						Anulează
					</Button>
					<Button onClick={handleSubmit}>Salvează</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
