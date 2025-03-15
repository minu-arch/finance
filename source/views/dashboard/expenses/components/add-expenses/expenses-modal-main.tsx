import {
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/theme/components/ui/select"
import { Select } from "@/theme/components/ui/select"
import type { ExpenseCategory } from "../../expenses.data"
import { Label } from "@/theme/components/ui/label"
import { Input } from "@/theme/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/theme/components/ui/popover"
import { Calendar } from "@/theme/components/ui/calendar"
import { format } from "date-fns"
import { ro } from "date-fns/locale"
import { Button } from "@/theme/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/theme/lib/utils"

// Definim interfața pentru formData
interface ExpenseFormData {
	apartmentId: string
	category: string
	description: string
	amount: string | number
	date?: Date | string
}

export default function ExpensesModalMain({
	formData,
	setFormData,
}: {
	formData: ExpenseFormData
	setFormData: (formData: ExpenseFormData) => void
}) {
	return (
		<div className="grid gap-4 py-4">
			<div className="grid gap-2">
				<Label htmlFor="apartment">Apartament</Label>
				<Select
					value={formData.apartmentId}
					onValueChange={(value) => setFormData({ ...formData, apartmentId: value })}
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
					onChange={(e) => setFormData({ ...formData, description: e.target.value })}
					placeholder="Ex: Schimbare capac WC"
				/>
			</div>

			<div className="grid gap-2">
				<Label htmlFor="amount">Sumă (RON)</Label>
				<Input
					id="amount"
					type="number"
					value={
						typeof formData.amount === "number"
							? formData.amount.toString()
							: formData.amount
					}
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
								? format(new Date(formData.date), "PPP", { locale: ro })
								: "Alege data"}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Calendar
							mode="single"
							selected={formData.date ? new Date(formData.date) : undefined}
							onSelect={(date) =>
								setFormData({
									...formData,
									date: date,
								})
							}
							locale={ro}
						/>
					</PopoverContent>
				</Popover>
			</div>
		</div>
	)
}
