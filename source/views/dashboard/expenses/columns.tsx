import type { ColumnDef } from "@tanstack/react-table"
import type { ApartmentSummary } from "@/views/dashboard/expenses/expenses.data"
import ExpenseAction from "@/views/dashboard/expenses/components/action/expenses-action"
import CountCell from "./cell/count-cell"
import AmountCell from "./cell/amount-cell"
import ApartmentCell from "./cell/apartment-cell"
import DateCell from "./cell/date-cell"

export const columns: ColumnDef<ApartmentSummary>[] = [
	{
		header: "Apartament",
		accessorKey: "apartmentId",
		cell: ApartmentCell,
	},
	{
		header: "Ultima actualizare",
		accessorKey: "lastExpenseDate",
		cell: DateCell,
	},
	{
		header: "Număr cheltuieli",
		accessorKey: "expenseCount",
		cell: CountCell,
	},
	{
		header: "Total cheltuieli",
		accessorKey: "totalAmount",
		cell: AmountCell,
	},
	{
		id: "actions",
		cell: ExpenseAction,
		size: 60,
	},
]
