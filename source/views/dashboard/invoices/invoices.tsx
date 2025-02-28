import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@ui/card"
import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
	type ColumnDef,
	type ColumnFiltersState,
	type PaginationState,
	type RowSelectionState,
	type Table,
} from "@tanstack/react-table"
import { mockData, type Invoice } from "./invoice.data"
import { invoiceColumns } from "./columns"
import InvoiceDescription from "./components/description/invoice-description"
import InvoiceFilters from "./components/filters/invoice-filters"
import { useRef, useState } from "react"
import TablePagination from "@/views/dashboard/components/table-pagination"
import InvoiceTable from "./components/tabel/invoice-table"

export default function Invoices() {
	const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 5,
	})
	const table = useReactTable<Invoice>({
		data: mockData,
		columns: invoiceColumns as ColumnDef<Invoice>[],
		getPaginationRowModel: getPaginationRowModel(),
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnFiltersChange: setColumnFilters,
		onPaginationChange: setPagination,
		onRowSelectionChange: setRowSelection,
		state: {
			columnFilters,
			pagination,
			rowSelection,
		},
		manualPagination: false,
		pageCount: Math.ceil(mockData.length / pagination.pageSize),
		enableRowSelection: true,
		enableMultiRowSelection: true,
	})

	// function to handle the deletion of the selected rows
	const handleDeleteSelected = () => {
		const selectedRows = table.getSelectedRowModel().rows
		console.log("Selected rows:", selectedRows)
		// Implement the logic for deleting the selected rows here
	}

	const inputRef = useRef<HTMLInputElement>(null)

	return (
		<div className="space-y-4 p-4 size-full mx-auto">
			<Card className="size-full border-none shadow-none">
				<CardTitle className="text-2xl font-bold">Facturi</CardTitle>
				<CardDescription>
					<InvoiceDescription />
				</CardDescription>
				<CardHeader className="p-0">
					<InvoiceFilters
						table={table}
						id="invoice"
						inputRef={inputRef as React.RefObject<HTMLInputElement>}
						handleDeleteSelected={handleDeleteSelected}
					/>
				</CardHeader>
				<InvoiceTable table={table} />
				<CardFooter className="block p-0">
					<TablePagination<Invoice>
						table={table}
						id="invoice"
						defaultPageSize={[5, 10, 20, 50, 100]}
					/>
				</CardFooter>
			</Card>
		</div>
	)
}
