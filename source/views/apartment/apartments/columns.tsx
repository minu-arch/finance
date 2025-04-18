import { Checkbox } from "@ui/checkbox"
import type { ColumnDef, FilterFn, Row } from "@tanstack/react-table"
import { mockData, type Apartment } from "@/views/apartment/apartments/data"
import CheckboxCell from "@/views/apartment/components/cell/checkbox"
import RowActions from "@/views/apartment/apartments/components/row-action/row-action"
import StatusCell from "@/views/apartment/apartments/cell/status-cell"
import SourceCell from "@/views/apartment/apartments/cell/source-cell"
import { format } from "date-fns"
import HeaderCheckbox from "@/views/apartment/components/header/header-checkbox"
import DateCell from "./cell/date-cell"
import PriceCell from "./cell/price-cell"
import FullnameCell from "./cell/fullname-cell"
import HeaderAction from "./cell/header-action"
import { cn } from "@/theme/lib/utils"

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
		cell: FullnameCell,
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
		cell: StatusCell,
		size: 100,
		filterFn: statusFilterFn,
	},
	{
		header: "Source",
		accessorKey: "source",
		cell: SourceCell,
		size: 120,
	},
	{
		header: "Price",
		accessorKey: "price",
		cell: PriceCell,
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
		header: HeaderAction,
		cell: RowActions,
		size: 60,
		enableHiding: false,
	},
]
