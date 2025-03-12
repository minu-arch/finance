import { Badge } from "@/theme/components/ui/badge"
import { ro } from "date-fns/locale"
import { format } from "date-fns"
import type { Expense, ExpenseCategory } from "@/views/dashboard/expenses/expenses.data"

interface ExpensesListProps {
	expenses: Expense[]
	getCategoryVariant: (
		category: ExpenseCategory,
	) => "default" | "secondary" | "destructive" | "outline"
	getCategoryLabel: (category: ExpenseCategory) => string
}

export default function ExpensesList({
	expenses,
	getCategoryVariant,
	getCategoryLabel,
}: ExpensesListProps) {
	return (
		<div className="rounded-lg border">
			<div className="grid grid-cols-4 gap-4 p-4 font-medium border-b">
				<div>Data</div>
				<div>Categorie</div>
				<div>Descriere</div>
				<div className="text-right">Sumă</div>
			</div>

			<div className="divide-y">
				{expenses.map((expense) => (
					<div key={expense.id} className="grid grid-cols-4 gap-4 p-4">
						<div className="text-sm">
							{format(new Date(expense.date), "d MMMM yyyy", { locale: ro })}
						</div>
						<div>
							<Badge variant={getCategoryVariant(expense.category)}>
								{getCategoryLabel(expense.category)}
							</Badge>
						</div>
						<div className="text-sm">{expense.description}</div>
						<div className="text-right font-medium">
							{new Intl.NumberFormat("ro-RO", {
								style: "currency",
								currency: "RON",
							}).format(expense.amount)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
