import { Pencil, Eye, Copy } from "lucide-react"
import { Button } from "@ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import type { CellContext } from "@tanstack/react-table"
import type { Invoice } from "../invoice.data"
import { useState } from "react"
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from "@ui/dialog"
import InvoiceModal from "@/views/dashboard/invoices/components/modal/invoice-modal/invoice-modal"
import ModalModificareFactura from "@/views/dashboard/invoices/components/modal/edit-modal/invoice-edit-modal"

export default function InvoiceAction({ row }: CellContext<Invoice, unknown>) {
	const invoice = row.original
	const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false)
	// Stare pentru a controla deschiderea modalului de modificare
	const [isModifyModalOpen, setIsModifyModalOpen] = useState(false)

	return (
		<div className="flex justify-end">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="h-8 w-8 p-0">
						<span className="sr-only">Open menu</span>
						<MoreHorizontal className="size-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>Actions</DropdownMenuLabel>

					<DropdownMenuSeparator />
					<DropdownMenuItem
						onClick={() => navigator.clipboard.writeText(invoice.invoiceNumber)}
					>
						<Copy className="mr-2 size-4" />
						Copy invoice Number
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setIsModifyModalOpen(true)}>
						<Pencil className="mr-2 size-4" />
						Edit details
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setIsPreviewModalOpen(true)}>
						<Eye className="mr-2 size-4" />
						Preview invoice
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			{/* Modal for invoice modification */}
			{isModifyModalOpen && (
				<ModalModificareFactura
					open={isModifyModalOpen}
					onOpenChange={setIsModifyModalOpen}
					invoice={invoice}
				/>
			)}

			<Dialog open={isPreviewModalOpen} onOpenChange={setIsPreviewModalOpen}>
				<DialogContent
					className="max-w-4xl"
					aria-describedby="Invoice Preview"
					aria-labelledby="Invoice Preview"
				>
					<DialogHeader aria-describedby="Header" aria-labelledby="Header">
						<DialogTitle aria-describedby="Title" aria-labelledby="Title">
							Invoice #{invoice.invoiceNumber}
						</DialogTitle>
					</DialogHeader>

					<div className="py-4">
						<InvoiceModal invoice={invoice} />
					</div>

					<DialogFooter>
						<Button variant="outline" onClick={() => setIsPreviewModalOpen(false)}>
							Close
						</Button>
						<Button>Download PDF</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}
