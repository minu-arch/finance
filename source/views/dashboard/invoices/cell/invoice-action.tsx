import { Pencil } from "lucide-react"
import { Button } from "@/theme/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/theme/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import type { CellContext } from "@tanstack/react-table"
import type { Invoice } from "../invoice.data"

export default function InvoiceAction({ row }: CellContext<Invoice, unknown>) {
	const invoice = row.original

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Open menu</span>
					<MoreHorizontal className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuItem onClick={() => navigator.clipboard.writeText(invoice.id)}>
					Copy invoice ID
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Pencil className="mr-2 h-4 w-4" />
					Edit details
				</DropdownMenuItem>
				<DropdownMenuItem>Change status</DropdownMenuItem>
				<DropdownMenuItem>Update due date</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
