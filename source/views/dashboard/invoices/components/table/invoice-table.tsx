import { Table } from "@ui/table"
import type { Invoice } from "@/views/dashboard/invoices/invoice.data"
import type { Table as TableType } from "@tanstack/react-table"
import InvoiceTableHeader from "./components/invoice-table-header"
import InvoiceTableBody from "./components/invoice-table-body"

interface InvoiceTableProps {
	table: TableType<Invoice>
}

export default function InvoiceTable({ table }: InvoiceTableProps) {
	return (
		<div className="rounded-md border">
			<Table>
				<InvoiceTableHeader table={table} />
				<InvoiceTableBody table={table} />
			</Table>
		</div>
	)
}
