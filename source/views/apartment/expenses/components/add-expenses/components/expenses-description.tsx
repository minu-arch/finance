import { Input } from "@ui/input"
import { Label } from "@ui/label"
import type { ExpenseFormData } from "../expenses.types"

interface ExpensesDescriptionProps {
	formData: ExpenseFormData
	setFormData: React.Dispatch<React.SetStateAction<ExpenseFormData>>
}
export default function ExpensesDescription({
	formData,
	setFormData,
}: ExpensesDescriptionProps) {
	return (
		<div className="grid gap-2">
			<Label htmlFor="description">Descriere</Label>
			<Input
				id="description"
				value={formData.description}
				onChange={(e) => setFormData({ ...formData, description: e.target.value })}
				placeholder="Ex: Schimbare capac WC"
			/>
		</div>
	)
}
