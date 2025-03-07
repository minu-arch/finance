import { Checkbox } from "@ui/checkbox"
import type { ColumnDef, FilterFn, Row } from "@tanstack/react-table"
import { mockData, type Apartment } from "@/views/dashboard/apartments/data"
import CheckboxCell from "@/views/dashboard/components/cell/checkbox"
import RowActions from "@/views/dashboard/apartments/components/row-action/row-action"
import StatusCell from "@/views/dashboard/apartments/cell/status"
import { format } from "date-fns"
import HeaderCheckbox from "@/views/dashboard/components/header/header-checkbox"
import DateCell from "./cell/date-cell"

const multiColumnFilterFn: FilterFn<Apartment> = (row, columnId, filterValue) => {
	const searchableRowContent =
		`${row.original.name} ${row.original.location}`.toLowerCase()
	const searchTerm = (filterValue ?? "").toLowerCase()
	return searchableRowContent.includes(searchTerm)
}

const statusFilterFn: FilterFn<Apartment> = (row, columnId, filterValue: string[]) => {
	if (!filterValue?.length) return true
	const status = row.getValue(columnId) as string
	return filterValue.includes(status)
}

interface RowActionsProps {
	row: Row<Apartment>
	handleDeleteRows: () => void
}

export const columns: ColumnDef<Apartment>[] = [
	{
		id: "select",
		header: HeaderCheckbox,
		cell: CheckboxCell,
		size: 28,
		enableSorting: false,
		enableHiding: true,
	},
	{
		header: "Name",
		accessorKey: "name",
		cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
		size: 180,
		filterFn: multiColumnFilterFn,
		enableHiding: false,
	},
	{
		header: "Location",
		accessorKey: "location",
		size: 180,
	},
	{
		header: "Status",
		accessorKey: "status",
		cell: ({ row }) => <StatusCell row={row} />,
		size: 100,
		filterFn: statusFilterFn,
	},
	{
		header: "Price",
		accessorKey: "price",
		cell: ({ row }) => {
			const amount = Number(row.getValue("price"))
			return `${amount} €`
		},
	},
	{
		header: "Rooms",
		accessorKey: "rooms",
	},
	{
		header: "Check In",
		accessorKey: "checkIn",
		cell: ({ row }) => <DateCell row={row} dateKey="checkIn" />,
		size: 120,
	},
	{
		header: "Check Out",
		accessorKey: "checkOut",
		cell: ({ row }) => <DateCell row={row} dateKey="checkOut" />,
		size: 120,
	},
	{
		id: "actions",
		header: () => <span className="sr-only">Actions</span>,
		cell: ({ row }) => <RowActions row={row} />,
		size: 60,
		enableHiding: false,
	},
]
