import { CardContent, CardHeader, CardTitle } from "@ui/card"
import { Separator } from "@ui/separator"
import type { Invoice } from "@/views/dashboard/invoices/invoice.data"
import InvoiceModalTable from "@/views/dashboard/invoices/components/modal/invoice-modal/components/invoice-modal-table"
import InvoiceModalHeader from "@/views/dashboard/invoices/components/modal/invoice-modal/components/invoice-modal-header"
import InvoiceModalContent from "@/views/dashboard/invoices/components/modal/invoice-modal/components/invoice-modal-content"
import InvoiceModalFooter from "@/views/dashboard/invoices/components/modal/invoice-modal/components/invoice-modal-footer"

interface InvoiceModalProps {
	invoice?: Invoice
}

export default function InvoiceModal({ invoice }: InvoiceModalProps) {
	const invoiceData: Invoice = invoice || {
		id: "default-id",
		invoiceNumber: "1",
		client: "John Doe",
		amount: 125.99,
		status: "Paid",
		dueDate: "2023-05-15",
		apartmentId: "default-apartment-id",
	}

	return (
		<div className="max-w-3xl mx-auto p-8 bg-white">
			<CardHeader className="text-center">
				<CardTitle className="text-3xl font-bold">FACTURĂ</CardTitle>
			</CardHeader>
			<CardContent>
				<InvoiceModalHeader invoice={invoiceData} />
				<InvoiceModalContent invoice={invoiceData} />
				<Separator className="my-6" />
				<InvoiceModalTable invoice={invoiceData} />
				<InvoiceModalFooter invoice={invoiceData} />
			</CardContent>
		</div>
	)
}
