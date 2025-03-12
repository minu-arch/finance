import { Button } from "@ui/button"
import { Plus } from "lucide-react"
import type { Table } from "@tanstack/react-table"
import type { ApartmentSummary, Expense } from "./expenses.data"
import { useState } from "react"
import AddExpenseModal from "./add-exepenses-modal"
import { mockData } from "./expenses.data"

interface ExpenseFiltersProps {
	table: Table<ApartmentSummary>
	onExpenseAdded: () => void
}

export default function ExpenseFilters({ table, onExpenseAdded }: ExpenseFiltersProps) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleAddExpense = (data: Expense) => {
		// Adăugăm cheltuiala în mockData
		mockData.push(data)
		// Notificăm componenta părinte că s-a adăugat o cheltuială
		onExpenseAdded()
	}

	return (
		<div className="flex items-center justify-between gap-4 py-4">
			<Button onClick={() => setIsModalOpen(true)} className="gap-2" variant="outline">
				<Plus className="size-4" />
				Adaugă cheltuială
			</Button>

			<AddExpenseModal
				open={isModalOpen}
				onOpenChange={setIsModalOpen}
				onSubmit={handleAddExpense}
			/>
		</div>
	)
}
