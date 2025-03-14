import { useState } from "react"
import type { Invoice } from "@/views/dashboard/invoices/invoice.data"
import FormButtons from "./components/form-buttons"
import FormStatus from "./components/form-status"
import FormPrice from "./components/form-price"
import FormDueDate from "./components/form-due-date"
import FormApartmentId from "./components/form-apartment-id"
import FormClient from "./components/form-client"
import FormSeriesNumber from "./components/form-series-number"

interface AddInvoiceFormProps {
	onSubmit: (invoice: Invoice) => void
	onCancel: () => void
}

export default function AddInvoiceForm({ onSubmit, onCancel }: AddInvoiceFormProps) {
	const [invoice, setInvoice] = useState<Invoice>({
		id: crypto.randomUUID(),
		invoiceNumber: "",
		client: "",
		amount: 0,
		status: "Pending",
		dueDate: new Date().toISOString().split("T")[0],
		apartmentId: "",
	})

	const handleChange = (field: keyof Invoice, value: string | number) => {
		setInvoice((prev) => ({
			...prev,
			[field]: value,
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		onSubmit(invoice)
	}

	return (
		<form onSubmit={handleSubmit} className="grid gap-4 py-4">
			<FormSeriesNumber
				seriesNumber={invoice.invoiceNumber}
				handleChange={(field, value) => handleChange(field as keyof Invoice, value)}
			/>

			<FormClient
				client={invoice.client}
				handleChange={(field, value) => handleChange(field as keyof Invoice, value)}
			/>

			<FormApartmentId
				apartmentId={invoice.apartmentId}
				handleChange={(field, value) => handleChange(field as keyof Invoice, value)}
			/>

			<FormDueDate
				dueDate={invoice.dueDate}
				handleChange={(field, value) => handleChange(field as keyof Invoice, value)}
			/>

			<FormPrice
				invoice={invoice}
				handleChange={(field, value) => handleChange(field as keyof Invoice, value)}
			/>

			<FormStatus
				value={invoice.status}
				onValueChange={(value) => handleChange("status", value)}
			/>

			<FormButtons onCancel={onCancel} />
		</form>
	)
}
