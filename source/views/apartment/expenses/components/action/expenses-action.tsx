import { Button } from "@ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@ui/dropdown-menu"
import { MoreHorizontal, Eye } from "lucide-react"
import type { CellContext } from "@tanstack/react-table"
import type { ApartmentSummary } from "@/views/apartment/expenses/expenses.data"
import { useState } from "react"
import ExpensePreviewModal from "@/views/apartment/expenses/components/action/components/expenses-preview-modal"
import { mockData } from "@/views/apartment/expenses/expenses.data"

export default function ExpenseAction({ row }: CellContext<ApartmentSummary, unknown>) {
	const [isPreviewOpen, setIsPreviewOpen] = useState(false)
	const apartmentId = row.original.apartmentId

	// filter expenses for this apartment
	const apartmentExpenses = mockData.filter(
		(expense) => expense.apartmentId === apartmentId,
	)

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="size-8 p-0">
						<MoreHorizontal className="size-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem
						className="flex items-center gap-2"
						onClick={() => setIsPreviewOpen(true)}
					>
						<Eye className="size-4" />
						<span>Vezi cheltuieli</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			<ExpensePreviewModal
				open={isPreviewOpen}
				onOpenChange={setIsPreviewOpen}
				apartmentId={apartmentId}
				expenses={apartmentExpenses}
			/>
		</>
	)
}
