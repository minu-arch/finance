import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/theme/components/ui/select"
import type { Table } from "@tanstack/react-table"
import type { Invoice } from "@/views/apartment/invoices/invoice.data"

export default function InvoiceStatusByFilter({ table }: { table: Table<Invoice> }) {
	return (
		<Select
			value={(table.getColumn("status")?.getFilterValue() as string) ?? ""}
			onValueChange={(value) =>
				table.getColumn("status")?.setFilterValue(value === "all" ? "" : value)
			}
		>
			<SelectTrigger className="max-w-[130px]">
				<SelectValue placeholder="Select status" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="all">All Status</SelectItem>
				<SelectItem value="Paid">Paid</SelectItem>
				<SelectItem value="Pending">Pending</SelectItem>
				<SelectItem value="Overdue">Overdue</SelectItem>
			</SelectContent>
		</Select>
	)
}
