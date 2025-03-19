import {
	type ColumnFiltersState,
	type SortingState,
	type VisibilityState,
	getCoreRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getSortedRowModel,
	useReactTable,
	type Column,
} from "@tanstack/react-table"
import { useId, useMemo, useRef, useState, useEffect } from "react"
import { columns } from "./columns"
import { mockData, type Apartment } from "./data"
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@ui/card"
import ApartmentDescription from "./components/description/apartment-description"
import ApartmentsFilters from "./components/filters/apartments-filters"
import ApartmentsTable from "./components/tabel/apartments-table"
import { TypographyH4 } from "@/views/apartment/components/typography"

export default function Apartments() {
	const id = useId()
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
	const inputRef = useRef<HTMLInputElement>(null)
	const [rowSelection, setRowSelection] = useState({})

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
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		getFilteredRowModel: getFilteredRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	})

	const handleDeleteRows = () => {
		const selectedRows = table.getSelectedRowModel().rows
		const updatedData = mockData.filter(
			(item) => !selectedRows.some((row) => row.original.id === item.id),
		)
		console.log("Deleted rows:", updatedData)

		setRowSelection({})
	}
	const [statusColumn, setStatusColumn] = useState<Column<Apartment, unknown> | null>(
		null,
	)

	useEffect(() => {
		const column = table.getColumn("status")
		if (column) {
			setStatusColumn(column)
		}
	}, [table])

	// Get unique status values
	const uniqueStatusValues = useMemo((): string[] => {
		if (!statusColumn) return []
		const values = Array.from(statusColumn.getFacetedUniqueValues().keys())
		return values.map((value) => String(value)).sort()
	}, [statusColumn])

	// Get counts for each status
	const statusCounts = useMemo(() => {
		if (!statusColumn) return new Map<string, number>()
		return statusColumn.getFacetedUniqueValues() as Map<string, number>
	}, [statusColumn])

	const selectedStatuses = useMemo((): string[] => {
		if (!statusColumn) return []
		const filterValue = statusColumn.getFilterValue() as string[]
		return filterValue ?? []
	}, [statusColumn])

	const handleStatusChange = (checked: boolean, value: string) => {
		if (!statusColumn) return

		// we check if the status is already in the filter value
		const currentFilterValue = (statusColumn.getFilterValue() as string[]) || []
		const valueExists = currentFilterValue.includes(value)

		// we update only if it is necessary
		if ((checked && !valueExists) || (!checked && valueExists)) {
			const newFilterValue = [...currentFilterValue]

			if (checked) {
				newFilterValue.push(value)
			} else {
				const index = newFilterValue.indexOf(value)
				if (index > -1) {
					newFilterValue.splice(index, 1)
				}
			}

			statusColumn.setFilterValue(newFilterValue.length ? newFilterValue : undefined)
		}
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
			</Card>
		</div>
	)
}
