import { Button } from "@/theme/components/ui/button"
import { PlusIcon } from "lucide-react"
import type { Table } from "@tanstack/react-table"
import type { Invoice } from "@/views/dashboard/invoices/invoice.data"

export default function InvoiceAddInvoice({ table }: { table: Table<Invoice> }) {
	return (
		<Button variant="outline">
			<PlusIcon className="size-4" />
			Adaugă factura
		</Button>
	)
}
