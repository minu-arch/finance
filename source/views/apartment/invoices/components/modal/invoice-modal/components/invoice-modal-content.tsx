import type { Invoice } from "@/views/apartment/invoices/invoice.data"
import InvoiceModalBadge from "@/views/apartment/invoices/components/modal/invoice-modal/components/invoice-modal-badge"

interface InvoiceModalContentProps {
	invoice: Invoice
}

export default function InvoiceModalContent({ invoice }: InvoiceModalContentProps) {
	return (
		<div className="flex justify-between mb-6">
			<div>
				<p>
					<span className="font-semibold">Serie/Număr:</span> {invoice.invoiceNumber}
				</p>
				<p>
					<span className="font-semibold">Data Emiterii:</span> 2023-05-01
				</p>
			</div>
			<InvoiceModalBadge status={invoice.status} dueDate={invoice.dueDate} />
		</div>
	)
}
