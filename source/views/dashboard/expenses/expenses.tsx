import { useState } from "react"
import {
	type ColumnFiltersState,
	getCoreRowModel,
	getFilteredRowModel,
	useReactTable,
} from "@tanstack/react-table"
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import { columns } from "./columns"
import { mockData, generateApartmentSummaries } from "./expenses.data"
import ExpenseDescription from "./expenses-description"
import ExpenseFilters from "./expenses-filters"
import ExpensesTable from "./expenses-table"

export default function Expenses() {
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [rowSelection, setRowSelection] = useState({})
	const [refreshKey, setRefreshKey] = useState(0)

	const apartmentSummaries = generateApartmentSummaries(mockData)

	const table = useReactTable({
		data: apartmentSummaries,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnFiltersChange: setColumnFilters,
		onRowSelectionChange: setRowSelection,
		enableRowSelection: true,
		state: {
			columnFilters,
			rowSelection,
		},
	})

	// function to refresh the table when an expense is added
	const handleExpenseAdded = () => {
		setRefreshKey((prev) => prev + 1)
	}

	return (
		<div className="space-y-4 p-4 size-full mx-auto">
			<Card className="size-full border-none shadow-none">
				<CardTitle className="text-2xl font-bold">Cheltuieli</CardTitle>
				<CardHeader className="p-0">
					<ExpenseDescription />
					<ExpenseFilters table={table} onExpenseAdded={handleExpenseAdded} />
				</CardHeader>
				<CardContent className="p-0">
					<ExpensesTable table={table} />
				</CardContent>
			</Card>
		</div>
	)
}
