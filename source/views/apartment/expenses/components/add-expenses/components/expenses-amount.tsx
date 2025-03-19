import { Input } from "@ui/input"
import { Label } from "@ui/label"
import type { ExpenseFormData } from "../expenses.types"

interface ExpensesAmountProps {
	formData: ExpenseFormData
	setFormData: React.Dispatch<React.SetStateAction<ExpenseFormData>>
}
export default function ExpensesAmount({ formData, setFormData }: ExpensesAmountProps) {
	return (
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
	)
}
