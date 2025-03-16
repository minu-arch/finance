import { SelectValue } from "@ui/select"
import { Label } from "@ui/label"
import { SelectTrigger } from "@ui/select"
import { SelectContent } from "@ui/select"
import { SelectItem } from "@ui/select"
import { Select } from "@ui/select"
import type { ExpenseFormData } from "../expenses.types"

interface ExpensesApartmentProps {
	formData: ExpenseFormData
	setFormData: React.Dispatch<React.SetStateAction<ExpenseFormData>>
}

export default function ExpensesApartment({
	formData,
	setFormData,
}: ExpensesApartmentProps) {
	return (
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
	)
}
