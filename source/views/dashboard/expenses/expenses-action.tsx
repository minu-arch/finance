import { Button } from "@ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@ui/dropdown-menu"
import { MoreHorizontal, Eye } from "lucide-react"
import type { Row } from "@tanstack/react-table"
import type { Expense } from "./expenses.data"
import { useState } from "react"
import ExpensePreviewModal from "./expenses-preview-modal"

interface ExpenseActionProps {
	row: Row<Expense>
	expenses: Expense[]
}

export default function ExpenseAction({ row, expenses }: ExpenseActionProps) {
	const [isPreviewOpen, setIsPreviewOpen] = useState(false)
	const apartmentId = row.original.apartmentId

	const apartmentExpenses = expenses.filter(
		(expense) => expense.apartmentId === apartmentId,
	)

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="h-8 w-8 p-0">
						<MoreHorizontal className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem
						className="flex items-center gap-2"
						onClick={() => setIsPreviewOpen(true)}
					>
						<Eye className="h-4 w-4" />
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
