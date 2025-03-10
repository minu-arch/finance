import { useState } from "react"
import {
	type ColumnFiltersState,
	type PaginationState,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@ui/card"
import { columns } from "./columns"
import { mockData } from "./expenses.data"
import ExpenseDescription from "./expenses-description"
import ExpenseFilters from "./expenses-filters"
import ExpensesTable from "./expenses-table"
import TablePagination from "@/views/dashboard/components/table-pagination"

export default function Expenses() {
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 5,
	})
	const [rowSelection, setRowSelection] = useState({})

	const table = useReactTable({
		data: mockData,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onColumnFiltersChange: setColumnFilters,
		onPaginationChange: setPagination,
		onRowSelectionChange: setRowSelection,
		enableRowSelection: true,
		state: {
			columnFilters,
			pagination,
			rowSelection,
		},
	})

	return (
		<div className="space-y-4 p-4 size-full mx-auto">
			<Card className="size-full border-none shadow-none">
				<CardTitle className="text-2xl font-bold">Cheltuieli</CardTitle>
				<CardHeader className="p-0">
					<ExpenseDescription />
					<ExpenseFilters table={table} />
				</CardHeader>
				<CardContent className="p-0">
					<ExpensesTable table={table} />
				</CardContent>
				<CardFooter className="block p-0">
					<TablePagination
						table={table}
						id="expenses"
						defaultPageSize={[5, 10, 20, 50]}
					/>
				</CardFooter>
			</Card>
		</div>
	)
}
