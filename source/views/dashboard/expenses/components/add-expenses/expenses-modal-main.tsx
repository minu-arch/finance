import type { ExpenseFormData } from "./expenses.types"
import ExpensesCategory from "./components/expenses-category"
import ExpensesApartment from "./components/expenses-select-apartment"
import ExpensesDescription from "./components/expenses-description"
import ExpensesAmount from "./components/expenses-amount"
import ExpensesData from "./components/expenses-data"
interface ExpensesModalMainProps {
	formData: ExpenseFormData
	setFormData: React.Dispatch<React.SetStateAction<ExpenseFormData>>
}

export default function ExpensesModalMain({
	formData,
	setFormData,
}: ExpensesModalMainProps) {
	return (
		<div className="grid gap-4 py-4">
			<ExpensesApartment formData={formData} setFormData={setFormData} />

			<ExpensesCategory formData={formData} setFormData={setFormData} />

			<ExpensesDescription formData={formData} setFormData={setFormData} />

			<ExpensesAmount formData={formData} setFormData={setFormData} />

			<ExpensesData formData={formData} setFormData={setFormData} />
		</div>
	)
}
