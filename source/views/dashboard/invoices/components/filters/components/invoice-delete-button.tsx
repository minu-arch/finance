import { Button } from "@/theme/components/ui/button"
import { TrashIcon } from "lucide-react"
import type { Table } from "@tanstack/react-table"
import type { Invoice } from "@/views/dashboard/invoices/invoice.data"

export default function InvoiceDeleteButton({
	table,
	handleDeleteSelected,
}: { table: Table<Invoice>; handleDeleteSelected: () => void }) {
	return (
		<Button
			variant="outline"
			onClick={handleDeleteSelected}
			disabled={!table.getSelectedRowModel().rows.length}
		>
			<TrashIcon className="size-4" />
			Șterge ({table.getSelectedRowModel().rows.length})
		</Button>
	)
}
