import { useState, useEffect, useMemo } from "react"
import {
	type ColumnFiltersState,
	type SortingState,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table"
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import { columns } from "@/views/apartment/expenses/columns"
import {
	mockData,
	generateApartmentSummaries,
} from "@/views/apartment/expenses/expenses.data"
import ExpenseDescription from "@/views/apartment/expenses/components/description/expenses-description"
import ExpenseFilters from "@/views/apartment/expenses/components/filters/expenses-filters"
import ExpensesTable from "@/views/apartment/expenses/components/table/expenses-table"

export default function Expenses() {
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [sorting, setSorting] = useState<SortingState>([])
	const [refreshKey, setRefreshKey] = useState(0)

	// use memo for calculate apartmentSummaries ,this prevents recalculation at every render
	const apartmentSummaries = useMemo(() => {
		// force recalculation when refreshKey changes
		console.log("calculate apartmentSummaries, refreshKey:", refreshKey)
		return generateApartmentSummaries(mockData)
	}, [refreshKey]) // refreshKey is needed to force recalculation when an expense is added

	// create table using useReactTable directly at the top level of the component
	// we don't use useMemo to wrap useReactTable, because it violates the rules of hooks
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

	// function to update data when a new expense is added
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
