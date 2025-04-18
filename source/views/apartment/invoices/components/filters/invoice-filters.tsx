import type { Table } from "@tanstack/react-table"
import type { Invoice } from "@/views/apartment/invoices/invoice.data"
import InvoiceStatusByFilter from "@/views/apartment/invoices/components/filters/components/invoice-status-by-filter"
import InvoiceAddInvoice from "@/views/apartment/invoices/components/filters/components/invoice-add-invoice"
import InvoiceDeleteButton from "@/views/apartment/invoices/components/filters/components/invoice-delete-button"
import InvoiceSearchFilter from "@/views/apartment/invoices/components/filters/components/invoice-search-filter"

interface InvoiceFiltersProps {
	table: Table<Invoice>
	id: string
	inputRef: React.RefObject<HTMLInputElement>
	handleDeleteSelected: () => void
	onAddInvoice: (invoice: Invoice) => void
}

export default function InvoiceFilters({
	table,
	id,
	inputRef,
	handleDeleteSelected,
	onAddInvoice,
}: InvoiceFiltersProps) {
	return (
		<div className="flex items-center justify-between gap-3">
			<div className="flex flex-wrap items-center gap-2 w-full">
				{/* Filter by Invoice Number */}
				<InvoiceSearchFilter table={table} inputRef={inputRef} />
				{/* Filter by Status */}
				<InvoiceStatusByFilter table={table} />
				{/* Add Invoice */}
				<InvoiceAddInvoice table={table} onAddInvoice={onAddInvoice} />
				{/* Delete Invoice */}
				<InvoiceDeleteButton
					table={table}
					handleDeleteSelected={handleDeleteSelected}
				/>
			</div>
		</div>
	)
}
