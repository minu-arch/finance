import type { CellContext } from "@tanstack/react-table"
import type { Invoice } from "@/views/apartment/invoices/invoice.data"

export default function InvoiceCurrency({ row }: CellContext<Invoice, unknown>) {
	const amount = row.getValue("amount") as number

	const formatted = new Intl.NumberFormat("ro-RO", {
		style: "currency",
		currency: "RON",
	}).format(amount)

	return <div className="font-medium">{formatted}</div>
}
