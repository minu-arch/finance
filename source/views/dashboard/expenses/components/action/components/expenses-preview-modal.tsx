import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@ui/dialog"
import type { Expense, ExpenseCategory } from "@/views/dashboard/expenses/expenses.data"
import ExpensesList from "./expenses-list"
import ExpensesTotal from "./expenses-total"
// add functions directly here instead of importing from columns
const getCategoryVariant = (
	category: ExpenseCategory,
): "default" | "secondary" | "destructive" | "outline" => {
	switch (category) {
		case "utilities":
			return "default"
		case "maintenance":
			return "secondary"
		case "repairs":
			return "destructive"
		case "cleaning":
			return "outline"
		default:
			return "default"
	}
}

const getCategoryLabel = (category: ExpenseCategory): string => {
	switch (category) {
		case "utilities":
			return "Utilități"
		case "maintenance":
			return "Întreținere"
		case "repairs":
			return "Reparații"
		case "cleaning":
			return "Curățenie"
		default:
			return "Altele"
	}
}

interface ExpensePreviewModalProps {
	open: boolean
	onOpenChange: (open: boolean) => void
	apartmentId: string
	expenses: Expense[]
}

export default function ExpensePreviewModal({
	open,
	onOpenChange,
	apartmentId,
	expenses,
}: ExpensePreviewModalProps) {
	const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl">
				<DialogHeader>
					<DialogTitle>Cheltuieli Apartament {apartmentId}</DialogTitle>
				</DialogHeader>

				<div className="space-y-6">
					{/* expenses list */}
					<ExpensesList
						expenses={expenses}
						getCategoryVariant={getCategoryVariant}
						getCategoryLabel={getCategoryLabel}
					/>

					{/* expenses total */}
					<ExpensesTotal total={total} />
				</div>
			</DialogContent>
		</Dialog>
	)
}
