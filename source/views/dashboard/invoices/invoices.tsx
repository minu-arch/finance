import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@ui/card"
import {
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
	type ColumnDef,
	type ColumnFiltersState,
	type PaginationState,
	type RowSelectionState,
} from "@tanstack/react-table"
import { mockData, type Invoice } from "@/views/dashboard/invoices/invoice.data"
import { invoiceColumns } from "@/views/dashboard/invoices/columns"
import InvoiceDescription from "@/views/dashboard/invoices/components/description/invoice-description"
import InvoiceFilters from "@/views/dashboard/invoices/components/filters/invoice-filters"
import { useRef, useState, useEffect } from "react"
import TablePagination from "@/views/dashboard/components/table-pagination"
import InvoiceTable from "@/views/dashboard/invoices/components/table/invoice-table"

export default function Invoices() {
	// Add a state to check if the component is mounted
	const [isMounted, setIsMounted] = useState(false)
	const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 5,
	})

	const [data, setData] = useState(mockData)

	// check if the component is mounted
	useEffect(() => {
		setIsMounted(true)
		return () => {
			setIsMounted(false)
		}
	}, [])

	// create the table only if the component is mounted
	// this prevents updates on unmounted components
	const table = useReactTable<Invoice>({
		data,
		columns: invoiceColumns as ColumnDef<Invoice>[],
		getPaginationRowModel: getPaginationRowModel(),
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnFiltersChange: (value) => {
			if (isMounted) setColumnFilters(value)
		},
		onPaginationChange: (value) => {
			if (isMounted) setPagination(value)
		},
		onRowSelectionChange: (value) => {
			if (isMounted) setRowSelection(value)
		},
		enableSorting: true,
		getSortedRowModel: getSortedRowModel(),
		state: {
			columnFilters,
			pagination,
			rowSelection,
		},
		manualPagination: false,
		pageCount: Math.ceil(data.length / pagination.pageSize),
		enableRowSelection: true,
		enableMultiRowSelection: true,
	})

	// function to handle the deletion of the selected rows
	const handleDeleteSelected = () => {
		if (!isMounted) return

		const selectedRows = table.getSelectedRowModel().rows
		console.log("Selected rows:", selectedRows)
		// Implement the logic for deleting the selected rows here
	}

	const inputRef = useRef<HTMLInputElement>(null)

	const handleAddInvoice = (newInvoice: Invoice) => {
		setData((prevData) => [...prevData, newInvoice])
	}

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
						onAddInvoice={handleAddInvoice}
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
