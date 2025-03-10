import { Button } from "@ui/button"
import { Plus } from "lucide-react"
import type { Table } from "@tanstack/react-table"
import type { Expense } from "./expenses.data"
import { useState } from "react"
import AddExpenseModal from "./add-exepenses-modal"

interface ExpenseFiltersProps {
	table: Table<Expense>
}

export default function ExpenseFilters({ table }: ExpenseFiltersProps) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleAddExpense = (data: Expense) => {
		console.log("Adding expense:", data)
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
