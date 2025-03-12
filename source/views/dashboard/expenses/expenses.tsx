import { useState } from "react"
import {
	type ColumnFiltersState,
	type SortingState,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table"
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import { columns } from "@/views/dashboard/expenses/columns"
import {
	mockData,
	generateApartmentSummaries,
} from "@/views/dashboard/expenses/expenses.data"
import ExpenseDescription from "@/views/dashboard/expenses/components/description/expenses-description"
import ExpenseFilters from "@/views/dashboard/expenses/components/filters/expenses-filters"
import ExpensesTable from "@/views/dashboard/expenses/components/table/expenses-table"

export default function Expenses() {
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [sorting, setSorting] = useState<SortingState>([])
	const [refreshKey, setRefreshKey] = useState(0)

	const apartmentSummaries = generateApartmentSummaries(mockData)

	const table = useReactTable({
		data: apartmentSummaries,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		onSortingChange: setSorting,
		enableSorting: true,
		state: {
			columnFilters,
			sorting,
		},
	})

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
