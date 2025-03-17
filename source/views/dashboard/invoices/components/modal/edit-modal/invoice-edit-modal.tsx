import { useState, useEffect } from "react"
import { Button } from "@ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@ui/dialog"
import type { Invoice } from "@/views/dashboard/invoices/invoice.data"
import InvoiceEditModalInput from "./components/invoice-edit-modal-input"
import InvoiceEditModalSelect from "./components/invoice-edit-modal-select"

interface ModalEditInvoiceProps {
	open: boolean
	onOpenChange: (open: boolean) => void
	invoice?: Invoice
}

export default function ModalEditInvoice({
	open,
	onOpenChange,
	invoice,
}: ModalEditInvoiceProps) {
	const [formData, setFormData] = useState({
		serieNumar: "1",
		client: "John Doe",
		apartament: "",
		dataEmiterii: "2023-05-01",
		dataScadentei: "2023-05-15",
		total: "125.99",
		status: "Platita",
	})

	useEffect(() => {
		if (invoice) {
			setFormData({
				serieNumar: invoice.invoiceNumber,
				client: invoice.client,
				apartament: "invoice.apartmentId",
				dataEmiterii: "2023-05-01",
				dataScadentei: invoice.dueDate,
				total: invoice.amount.toString(),
				status:
					invoice.status === "Paid"
						? "Platita"
						: invoice.status === "Pending"
							? "Neplatita"
							: "Anulata",
			})
		}
	}, [invoice])

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSelectChange = (value: string) => {
		setFormData((prev) => ({ ...prev, status: value }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log("Datele actualizate:", formData)
		onOpenChange(false)
	}

	return (
		<Dialog
			open={open}
			onOpenChange={onOpenChange}
			aria-describedby="Modifică Factura"
			aria-labelledby="Modifică Factura"
		>
			<DialogContent
				className="sm:max-w-[425px]"
				aria-describedby="Modifică Factura"
				aria-labelledby="Modifică Factura"
			>
				<DialogHeader aria-describedby="Header" aria-labelledby="Header">
					<DialogTitle>Modifică Factura</DialogTitle>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="grid gap-4 py-4">
					<InvoiceEditModalInput
						handleInputChange={handleInputChange}
						formData={formData}
					/>
					<InvoiceEditModalSelect
						handleSelectChange={handleSelectChange}
						formData={formData}
					/>
					<Button type="submit" className="mt-4">
						Salvează modificările
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	)
}
