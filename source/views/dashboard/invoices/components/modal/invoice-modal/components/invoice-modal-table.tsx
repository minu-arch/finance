import type { Invoice } from "@/views/dashboard/invoices/invoice.data"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@ui/table"

interface InvoiceModalTableProps {
	invoice: Invoice
}

export default function InvoiceModalTable({ invoice }: InvoiceModalTableProps) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Descriere</TableHead>
					<TableHead className="text-right">Cantitate</TableHead>
					<TableHead className="text-right">Preț unitar</TableHead>
					<TableHead className="text-right">Total</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>Chirie apartament</TableCell>
					<TableCell className="text-right">1</TableCell>
					<TableCell className="text-right">{invoice.amount} RON</TableCell>
					<TableCell className="text-right">{invoice.amount} RON</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}
