import { TableBody } from "@ui/table"
import { TableCell } from "@ui/table"
import { TableRow } from "@ui/table"
import { columns } from "@/views/apartment/expenses/columns"
import { flexRender, type Table } from "@tanstack/react-table"
import type { ApartmentSummary } from "../../../expenses.data"

interface ExpensesTableBodyProps {
	table: Table<ApartmentSummary>
}

export default function ExpensesTableBody({ table }: ExpensesTableBodyProps) {
	return (
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
	)
}
