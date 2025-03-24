import { CircleXIcon } from "lucide-react"
import { cn } from "@/theme/lib/utils"
import { ListFilterIcon } from "lucide-react"
import { Input } from "@ui/input"
import type { Table } from "@tanstack/react-table"
import type { Invoice } from "@/views/apartment/invoices/invoice.data"

export default function InvoiceSearchFilter({
	table,
	inputRef,
}: { table: Table<Invoice>; inputRef: React.RefObject<HTMLInputElement> }) {
	return (
		<div className="relative">
			<Input
				ref={inputRef}
				className={cn(
					"peer min-w-60 ps-9",
					Boolean(table.getColumn("invoiceNumber")?.getFilterValue()) && "pe-7",
				)}
				value={(table.getColumn("invoiceNumber")?.getFilterValue() ?? "") as string}
				onChange={(e) =>
					table.getColumn("invoiceNumber")?.setFilterValue(e.target.value)
				}
				placeholder="Caută după factura / nume."
				type="text"
				aria-label="Caută după factura / nume."
			/>
			<div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
				<ListFilterIcon size={16} aria-hidden="true" />
			</div>
			{Boolean(table.getColumn("invoiceNumber")?.getFilterValue()) && (
				<button
					type="button"
					className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
					onClick={() => table.getColumn("invoiceNumber")?.setFilterValue("")}
					aria-label="Clear filter"
				>
					<CircleXIcon size={16} aria-hidden="true" />
				</button>
			)}
		</div>
	)
}
