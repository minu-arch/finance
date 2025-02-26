import { TableHead, TableRow, TableHeader } from "@ui/table"
import { flexRender } from "@tanstack/react-table"
import type { Table } from "@tanstack/react-table"
import type { Invoice } from "@/views/dashboard/invoices/invoice.data"

interface InvoiceTableHeaderProps {
	table: Table<Invoice>
}

export default function InvoiceTableHeader({ table }: InvoiceTableHeaderProps) {
	return (
		<TableHeader>
			{table.getHeaderGroups().map((headerGroup) => (
				<TableRow key={headerGroup.id}>
					{headerGroup.headers.map((header) => {
						return (
							<TableHead key={header.id}>
								{header.isPlaceholder
									? null
									: flexRender(header.column.columnDef.header, header.getContext())}
							</TableHead>
						)
					})}
				</TableRow>
			))}
		</TableHeader>
	)
}
