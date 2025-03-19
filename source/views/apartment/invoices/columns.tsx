import type { ColumnDef, FilterFn } from "@tanstack/react-table"
import CheckboxCell from "@/views/apartment/components/cell/checkbox"
import InvoiceCurrency from "@/views/apartment/invoices/cell/invoice-currency"
import InvoiceStatus from "@/views/apartment/invoices/cell/invoice-status"
import InvoiceAction from "@/views/apartment/invoices/cell/invoice-action"
import HeaderCheckbox from "@/views/apartment/components/header/header-checkbox"
import type { Invoice } from "./invoice.data"

const multiColumnFilterFn: FilterFn<Invoice> = (row, columnId, filterValue) => {
	const searchableRowContent =
		`${row.original.invoiceNumber} ${row.original.client}`.toLowerCase()
	const searchTerm = (filterValue ?? "").toLowerCase()
	return searchableRowContent.includes(searchTerm)
}

export const invoiceColumns: ColumnDef<Invoice>[] = [
	{
		id: "select",
		header: HeaderCheckbox,
		cell: CheckboxCell,
		enableSorting: false,
		size: 25,
	},
	{
		accessorKey: "invoiceNumber",
		header: "Invoice Number",
		filterFn: multiColumnFilterFn,
	},
	{
		accessorKey: "client",
		header: "Client",
	},
	{
		accessorKey: "amount",
		header: "Amount",
		cell: InvoiceCurrency,
	},
	{
		accessorKey: "status",
		header: "Status",
		filterFn: "equals",
		cell: InvoiceStatus,
	},
	{
		accessorKey: "dueDate",
		header: "Due Date",
	},
	{
		id: "actions",
		cell: InvoiceAction,
	},
]
