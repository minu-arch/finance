import { TableCell, TableRow, TableBody } from "@ui/table"
import { invoiceColumns } from "@/views/apartment/invoices/columns"
import { flexRender } from "@tanstack/react-table"
import type { Table } from "@tanstack/react-table"
import type { Invoice } from "@/views/apartment/invoices/invoice.data"

interface InvoiceTableBodyProps {
	table: Table<Invoice>
}

export default function InvoiceTableBody({ table }: InvoiceTableBodyProps) {
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
