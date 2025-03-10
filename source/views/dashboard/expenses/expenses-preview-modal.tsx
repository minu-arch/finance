import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@ui/dialog"
import { format } from "date-fns"
import { ro } from "date-fns/locale"
import { Badge } from "@ui/badge"
import type { Expense } from "./expenses.data"
import { getCategoryLabel, getCategoryVariant } from "./columns"

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
					{/* Lista de cheltuieli */}
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

					{/* Total */}
					<div className="flex justify-between items-center p-4 bg-muted rounded-lg">
						<span className="font-semibold">Total Cheltuieli</span>
						<span className="text-lg font-bold">
							{new Intl.NumberFormat("ro-RO", {
								style: "currency",
								currency: "RON",
							}).format(total)}
						</span>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
