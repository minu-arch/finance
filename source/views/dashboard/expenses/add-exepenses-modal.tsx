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
import type { Expense } from "./expenses.data"
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
	const [date, setDate] = useState<Date>()

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
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Selectează apartamentul" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="101">Apartament 101</SelectItem>
								<SelectItem value="102">Apartament 102</SelectItem>
								<SelectItem value="103">Apartament 103</SelectItem>
								<SelectItem value="104">Apartament 104</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="grid gap-2">
						<Label htmlFor="category">Categorie</Label>
						<Select>
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
						<Input id="description" placeholder="Ex: Schimbare capac WC" />
					</div>

					<div className="grid gap-2">
						<Label htmlFor="amount">Sumă (RON)</Label>
						<Input id="amount" type="number" placeholder="100" />
					</div>

					<div className="grid gap-2">
						<Label>Data</Label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant="outline"
									className={cn(
										"justify-start text-left font-normal",
										!date && "text-muted-foreground",
									)}
								>
									<CalendarIcon className="mr-2 h-4 w-4" />
									{date ? format(date, "PPP", { locale: ro }) : "Alege data"}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0">
								<Calendar
									mode="single"
									selected={date}
									onSelect={setDate}
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
					<Button
						onClick={() => {
							onSubmit({
								id: "",
								apartmentId: "",
								category: "other",
								description: "",
								amount: 0,
								date: date ? format(date, "yyyy-MM-dd") : "",
							})
							onOpenChange(false)
						}}
					>
						Salvează
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
