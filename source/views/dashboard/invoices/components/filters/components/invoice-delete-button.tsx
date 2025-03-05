import { Button } from "@/theme/components/ui/button"
import { TrashIcon } from "lucide-react"
import type { Table } from "@tanstack/react-table"
import type { Invoice } from "@/views/dashboard/invoices/invoice.data"
import DeleteAlert from "@/views/dashboard/components/components/alert-dialog-delete"

export default function InvoiceDeleteButton({
	table,
	handleDeleteSelected,
}: { table: Table<Invoice>; handleDeleteSelected: () => void }) {
	const selectedCount = table.getSelectedRowModel().rows.length

	return (
		<DeleteAlert
			onDelete={handleDeleteSelected}
			title="Șterge facturile selectate"
			description={`Ești sigur că vrei să ștergi ${selectedCount} ${
				selectedCount === 1 ? "factură" : "facturi"
			}? Această acțiune nu poate fi anulată.`}
		>
			<Button variant="outline" disabled={!selectedCount} className="gap-2">
				<TrashIcon className="size-4" />
				Șterge ({selectedCount})
			</Button>
		</DeleteAlert>
	)
}
