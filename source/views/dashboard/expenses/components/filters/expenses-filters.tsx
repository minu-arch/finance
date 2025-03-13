import { Button } from "@ui/button"
import { Plus } from "lucide-react"
import type { Table } from "@tanstack/react-table"
import type {
	ApartmentSummary,
	Expense,
} from "@/views/dashboard/expenses/expenses.data"
import { useState, useCallback } from "react"
import AddExpenseModal from "@/views/dashboard/expenses/add-exepenses-modal"
import { mockData } from "@/views/dashboard/expenses/expenses.data"

interface ExpenseFiltersProps {
	table: Table<ApartmentSummary>
	onExpenseAdded: () => void
}

export default function ExpenseFilters({ table, onExpenseAdded }: ExpenseFiltersProps) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	// use useCallback to prevent the function from being recreated at every render
	const handleAddExpense = useCallback(
		(data: Expense) => {
			try {
				// add the expense directly to the mockData array
				// this approach is simple and sufficient for the front-end
				mockData.push(data)

				// display a success message for the user
				console.log("Cheltuială adăugată cu succes:", data)

				// notify the parent component that the data has changed
				// this callback will be replaced with a refetch of the data from the server
				setTimeout(() => {
					onExpenseAdded()
				}, 0)
			} catch (error) {
				console.error("Eroare la adăugarea cheltuielii:", error)
			}
		},
		[onExpenseAdded],
	)

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
