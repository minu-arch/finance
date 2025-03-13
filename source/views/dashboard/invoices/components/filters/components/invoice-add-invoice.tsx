import { Button } from "@ui/button"
import { PlusIcon } from "lucide-react"
import { useState } from "react"
import type { Table } from "@tanstack/react-table"
import type { Invoice } from "@/views/dashboard/invoices/invoice.data"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@ui/dialog"
import AddInvoiceForm from "../../modal/add-invoice-modal/invoice-form-modal"
import { VisuallyHidden } from "@/views/dashboard/components/visually-hidden"
interface InvoiceAddInvoiceProps {
	table: Table<Invoice>
	onAddInvoice?: (invoice: Invoice) => void
}

export default function InvoiceAddInvoice({
	table,
	onAddInvoice,
}: InvoiceAddInvoiceProps) {
	const [isOpen, setIsOpen] = useState(false)
	const dialogTitleId = "dialog-title-add-invoice"
	const handleAddInvoice = (newInvoice: Invoice) => {
		if (onAddInvoice) {
			onAddInvoice(newInvoice)
		} else {
			console.log("New invoice:", newInvoice)
		}
		setIsOpen(false)
	}

	return (
		<>
			<Button variant="outline" onClick={() => setIsOpen(true)}>
				<PlusIcon className="size-4 mr-2" />
				Adaugă factură
			</Button>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className="max-w-4xl" aria-labelledby={dialogTitleId}>
					<DialogHeader>
						<VisuallyHidden>
							<DialogTitle id={dialogTitleId}>Adaugă Factură Nouă</DialogTitle>
						</VisuallyHidden>
					</DialogHeader>
					<AddInvoiceForm
						onSubmit={handleAddInvoice}
						onCancel={() => setIsOpen(false)}
					/>
				</DialogContent>
			</Dialog>
		</>
	)
}
