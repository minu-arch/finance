import type { ColumnDef } from "@tanstack/react-table"
import type { ApartmentSummary } from "@/views/dashboard/expenses/expenses.data"
import ExpenseAction from "@/views/dashboard/expenses/components/action/expenses-action"
import CountCell from "./cell/count-cell"
import AmountCell from "./cell/amount-cell"
import ApartmentCell from "./cell/apartment-cell"
import DateCell from "./cell/date-cell"
import HeaderCheckbox from "@/views/dashboard/components/header/header-checkbox"
import CheckboxCell from "@/views/dashboard/components/cell/checkbox"

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
