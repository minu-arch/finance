import { useState } from "react"
import { Button } from "@ui/button"
import { Input } from "@ui/input"
import { Label } from "@ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui/select"
import type { Invoice } from "@/views/dashboard/invoices/invoice.data"

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
			<div className="grid grid-cols-4 items-center gap-4">
				<Label htmlFor="invoiceNumber" className="text-right">
					Serie/Număr
				</Label>
				<Input
					id="invoiceNumber"
					value={invoice.invoiceNumber}
					onChange={(e) => handleChange("invoiceNumber", e.target.value)}
					className="col-span-3"
					placeholder="Număr factură"
				/>
			</div>

			<div className="grid grid-cols-4 items-center gap-4">
				<Label htmlFor="client" className="text-right">
					Client
				</Label>
				<Input
					id="client"
					value={invoice.client}
					onChange={(e) => handleChange("client", e.target.value)}
					className="col-span-3"
					placeholder="Nume client"
				/>
			</div>

			<div className="grid grid-cols-4 items-center gap-4">
				<Label htmlFor="apartmentId" className="text-right">
					Apartament
				</Label>
				<Input
					id="apartmentId"
					value={invoice.apartmentId}
					onChange={(e) => handleChange("apartmentId", e.target.value)}
					className="col-span-3"
					placeholder="ID Apartament"
				/>
			</div>

			<div className="grid grid-cols-4 items-center gap-4">
				<Label htmlFor="dueDate" className="text-right">
					Data Scadenței
				</Label>
				<Input
					id="dueDate"
					type="date"
					value={invoice.dueDate}
					onChange={(e) => handleChange("dueDate", e.target.value)}
					className="col-span-3"
				/>
			</div>

			<div className="grid grid-cols-4 items-center gap-4">
				<Label htmlFor="amount" className="text-right">
					Sumă
				</Label>
				<Input
					id="amount"
					type="number"
					value={invoice.amount}
					onChange={(e) =>
						handleChange("amount", Number.parseFloat(e.target.value) || 0)
					}
					className="col-span-3"
					placeholder="0.00"
				/>
			</div>

			<div className="grid grid-cols-4 items-center gap-4">
				<Label htmlFor="status" className="text-right">
					Status
				</Label>
				<Select
					value={invoice.status}
					onValueChange={(value) => handleChange("status", value)}
				>
					<SelectTrigger className="col-span-3">
						<SelectValue placeholder="Selectează status" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="Paid">Plătită</SelectItem>
						<SelectItem value="Pending">În așteptare</SelectItem>
						<SelectItem value="Overdue">Restantă</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="flex justify-end gap-4 mt-4">
				<Button type="button" variant="outline" onClick={onCancel}>
					Anulează
				</Button>
				<Button type="submit">Creează Factura</Button>
			</div>
		</form>
	)
}
