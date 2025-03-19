import type { ColumnDef } from "@tanstack/react-table"
import type { ApartmentSummary } from "@/views/apartment/expenses/expenses.data"
import ExpenseAction from "@/views/apartment/expenses/components/action/expenses-action"
import CountCell from "./cell/count-cell"
import AmountCell from "./cell/amount-cell"
import ApartmentCell from "./cell/apartment-cell"
import DateCell from "./cell/date-cell"

export const columns: ColumnDef<ApartmentSummary>[] = [
	{
		header: "Apartament",
		accessorKey: "apartmentId",
		cell: ApartmentCell,
		enableSorting: true,
	},
	{
		header: "Ultima actualizare",
		accessorKey: "lastExpenseDate",
		cell: DateCell,
		enableSorting: true,
	},
	{
		header: "Număr cheltuieli",
		accessorKey: "expenseCount",
		cell: CountCell,
		enableSorting: true,
	},
	{
		header: "Total cheltuieli",
		accessorKey: "totalAmount",
		cell: AmountCell,
		enableSorting: true,
	},
	{
		id: "actions",
		cell: ExpenseAction,
		enableSorting: false,
		size: 60,
	},
]
