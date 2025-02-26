import { TableCell, TableRow, TableBody } from "@ui/table"
import { flexRender } from "@tanstack/react-table"
import type { Table, ColumnDef } from "@tanstack/react-table"
import type { Apartment } from "@/views/dashboard/apartments/data"

interface ApartmentTableBodyProps {
	table: Table<Apartment>
	columns: ColumnDef<Apartment>[]
}

export default function ApartmentTableBody({
	table,
	columns,
}: ApartmentTableBodyProps) {
	return (
		<TableBody>
			{table.getRowModel().rows?.length ? (
				table.getRowModel().rows.map((row) => (
					<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
						{row.getVisibleCells().map((cell) => (
							<TableCell key={cell.id} className="last:py-0">
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</TableCell>
						))}
					</TableRow>
				))
			) : (
				<TableRow>
					<TableCell colSpan={columns.length} className="h-24 text-center">
						No results.
					</TableCell>
				</TableRow>
			)}
		</TableBody>
	)
}
