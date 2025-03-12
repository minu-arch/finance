import { Table, TableBody, TableCell, TableRow } from "@ui/table"
import { flexRender, type Table as TableType } from "@tanstack/react-table"
import type { ApartmentSummary } from "@/views/dashboard/expenses/expenses.data"
import { columns } from "@/views/dashboard/expenses/columns"
import ExpensesTableHeader from "@/views/dashboard/expenses/components/table/components/expenses-table-header"

interface ExpensesTableProps {
	table: TableType<ApartmentSummary>
}

export default function ExpensesTable({ table }: ExpensesTableProps) {
	return (
		<div className="rounded-md border">
			<Table>
				<ExpensesTableHeader table={table} />
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								Nu există cheltuieli.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	)
}
