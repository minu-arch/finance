import type { ColumnDef } from "@tanstack/react-table"
import type { ApartmentSummary } from "@/views/dashboard/expenses/expenses.data"
import { format } from "date-fns"
import { ro } from "date-fns/locale"
import ExpenseAction from "@/views/dashboard/expenses/components/action/expenses-action"
import { Badge } from "@ui/badge"

export const columns: ColumnDef<ApartmentSummary>[] = [
	{
		header: "Apartament",
		accessorKey: "apartmentId",
		cell: ({ row }) => (
			<div className="font-medium">
				Apartament {row.original.apartmentId.replace("ap", "")}
			</div>
		),
	},
	{
		header: "Ultima actualizare",
		accessorKey: "lastExpenseDate",
		cell: ({ row }) => {
			const date = row.getValue("lastExpenseDate") as string
			return date ? format(new Date(date), "dd MMMM yyyy", { locale: ro }) : "-"
		},
	},
	{
		header: "Număr cheltuieli",
		accessorKey: "expenseCount",
		cell: ({ row }) => (
			<Badge variant="secondary">{row.getValue("expenseCount")}</Badge>
		),
	},
	{
		header: "Total cheltuieli",
		accessorKey: "totalAmount",
		cell: ({ row }) => {
			const amount = row.getValue("totalAmount") as number
			return new Intl.NumberFormat("ro-RO", {
				style: "currency",
				currency: "RON",
			}).format(amount)
		},
	},
	{
		id: "actions",
		cell: ({ row }) => <ExpenseAction row={row} />,
		size: 60,
	},
]
