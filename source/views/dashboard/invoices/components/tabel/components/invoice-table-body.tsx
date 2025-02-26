import { TableCell, TableRow, TableBody } from "@ui/table"
import { invoiceColumns } from "@/views/dashboard/invoices/columns"
import { flexRender } from "@tanstack/react-table"
import type { Table, ColumnDef } from "@tanstack/react-table"
import type { Invoice } from "@/views/dashboard/invoices/invoice.data"

interface InvoiceTableBodyProps {
	table: Table<Invoice>
	columns: ColumnDef<Invoice>[]
}

export default function InvoiceTableBody({ table, columns }: InvoiceTableBodyProps) {
	return (
		<TableBody>
			{table.getRowModel().rows?.length ? (
				table.getRowModel().rows.map((row) => (
					<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
						{row.getVisibleCells().map((cell) => (
							<TableCell key={cell.id}>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</TableCell>
						))}
					</TableRow>
				))
			) : (
				<TableRow>
					<TableCell colSpan={invoiceColumns.length} className="h-24 text-center">
						No results.
					</TableCell>
				</TableRow>
			)}
		</TableBody>
	)
}
