import { useState, useEffect } from "react"
import { Button } from "@ui/button"
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@ui/dialog"
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
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="serieNumar" className="text-right">
							Serie/Număr
						</Label>
						<Input
							id="serieNumar"
							name="serieNumar"
							value={formData.serieNumar}
							onChange={handleInputChange}
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="client" className="text-right">
							Client
						</Label>
						<Input
							id="client"
							name="client"
							value={formData.client}
							onChange={handleInputChange}
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="apartament" className="text-right">
							Apartament
						</Label>
						<Input
							id="apartament"
							name="apartament"
							value={formData.apartament}
							onChange={handleInputChange}
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="dataEmiterii" className="text-right">
							Data Emiterii
						</Label>
						<Input
							id="dataEmiterii"
							name="dataEmiterii"
							type="date"
							value={formData.dataEmiterii}
							onChange={handleInputChange}
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="dataScadentei" className="text-right">
							Data Scadenței
						</Label>
						<Input
							id="dataScadentei"
							name="dataScadentei"
							type="date"
							value={formData.dataScadentei}
							onChange={handleInputChange}
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="total" className="text-right">
							Total
						</Label>
						<Input
							id="total"
							name="total"
							type="number"
							step="0.01"
							value={formData.total}
							onChange={handleInputChange}
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="status" className="text-right">
							Status
						</Label>
						<Select onValueChange={handleSelectChange} defaultValue={formData.status}>
							<SelectTrigger className="col-span-3">
								<SelectValue placeholder="Selectează statusul" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="Platita">Plătită</SelectItem>
								<SelectItem value="Neplatita">Neplătită</SelectItem>
								<SelectItem value="Anulata">Anulată</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<Button type="submit" className="mt-4">
						Salvează modificările
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	)
}
