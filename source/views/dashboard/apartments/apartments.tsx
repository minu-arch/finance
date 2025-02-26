import {
	type ColumnFiltersState,
	type PaginationState,
	type SortingState,
	type VisibilityState,
	getCoreRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table"
import { useId, useMemo, useRef, useState } from "react"
import { columns } from "./columns"
import { mockData, type Apartment } from "./data"
import {
	Card,
	CardTitle,
	CardHeader,
	CardContent,
	CardFooter,
	CardDescription,
} from "@ui/card"
import ApartmentDescription from "./components/description/apartment-description"
import ApartmentsFilters from "./components/filters/apartments-filters"
import ApartmentsTable from "./components/tabel/apartments-table"
import TablePagination from "@/views/dashboard/components/table-pagination"

export default function Apartments() {
	const id = useId()
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 5,
	})
	const inputRef = useRef<HTMLInputElement>(null)

	const [sorting, setSorting] = useState<SortingState>([
		{
			id: "name",
			desc: false,
		},
	])

	const table = useReactTable({
		data: mockData,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onSortingChange: setSorting,
		enableSortingRemoval: false,
		getPaginationRowModel: getPaginationRowModel(),
		onPaginationChange: setPagination,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		getFilteredRowModel: getFilteredRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		state: {
			sorting,
			pagination,
			columnFilters,
			columnVisibility,
		},
		manualPagination: false,
		pageCount: Math.ceil(mockData.length / pagination.pageSize),
	})

	const handleDeleteRows = () => {
		const selectedRows = table.getSelectedRowModel().rows
		const updatedData = mockData.filter(
			(item) => !selectedRows.some((row) => row.original.id === item.id),
		)
		console.log("Deleted rows:", updatedData)
		table.resetRowSelection()
	}

	// Get unique status values
	const uniqueStatusValues = useMemo(() => {
		const statusColumn = table.getColumn("status")
		if (!statusColumn) return []
		const values = Array.from(statusColumn.getFacetedUniqueValues().keys())
		return values.sort()
	}, [table])

	// Get counts for each status
	const statusCounts = useMemo(() => {
		const statusColumn = table.getColumn("status")
		if (!statusColumn) return new Map()
		return statusColumn.getFacetedUniqueValues()
	}, [table])

	const selectedStatuses = useMemo(() => {
		const statusColumn = table.getColumn("status")
		const filterValue = statusColumn?.getFilterValue() as string[]
		return filterValue ?? []
	}, [table])

	const handleStatusChange = (checked: boolean, value: string) => {
		const filterValue = table.getColumn("status")?.getFilterValue() as string[]
		const newFilterValue = filterValue ? [...filterValue] : []

		if (checked) {
			newFilterValue.push(value)
		} else {
			const index = newFilterValue.indexOf(value)
			if (index > -1) {
				newFilterValue.splice(index, 1)
			}
		}

		table
			.getColumn("status")
			?.setFilterValue(newFilterValue.length ? newFilterValue : undefined)
	}

	return (
		<div className="space-y-4 p-4 size-full mx-auto">
			<Card className="size-full border-none shadow-none">
				<CardTitle className="text-2xl font-bold">Apartamente</CardTitle>
				{/* Card Description */}
				<CardDescription>
					<ApartmentDescription />
				</CardDescription>
				{/* Filters */}
				<CardHeader className="p-0">
					<ApartmentsFilters
						table={table}
						id={id}
						inputRef={inputRef as React.RefObject<HTMLInputElement>}
						selectedStatuses={selectedStatuses}
						handleStatusChange={handleStatusChange}
						uniqueStatusValues={uniqueStatusValues}
						statusCounts={statusCounts}
						handleDeleteRows={handleDeleteRows}
					/>
				</CardHeader>
				{/* Table */}
				<CardContent className="p-0">
					<ApartmentsTable table={table} columns={columns} />
				</CardContent>
				{/* Pagination */}
				<CardFooter className="block p-0">
					<TablePagination<Apartment>
						table={table}
						id="apartment"
						defaultPageSize={[5, 10, 20, 50, 100]}
					/>
				</CardFooter>
			</Card>
		</div>
	)
}
