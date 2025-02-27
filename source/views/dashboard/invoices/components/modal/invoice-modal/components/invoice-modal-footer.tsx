import { Separator } from "@/theme/components/ui/separator"
import type { Invoice } from "@/views/dashboard/invoices/invoice.data"

interface InvoiceModalFooterProps {
	invoice: Invoice
}

export default function InvoiceModalFooter({ invoice }: InvoiceModalFooterProps) {
	return (
		<>
			<div className="mt-6 text-right">
				<p className="font-semibold">Total: {invoice.amount} RON</p>
			</div>
			<Separator className="my-6" />
			<div className="mt-6">
				<p className="font-semibold">Notă:</p>
				<p>
					Vă mulțumim pentru plata promptă. Pentru orice întrebări, vă rugăm să ne
					contactați.
				</p>
			</div>
		</>
	)
}
