import type { Table as TableType, ColumnDef } from "@tanstack/react-table"
import { Table } from "@ui/table"
import ApartmentTableHeader from "./components/apartment-table-header"
import ApartmentTableBody from "./components/apartment-table-body"
import type { Apartment } from "@/views/dashboard/apartments/data"

interface ApartmentsTabelProps {
	table: TableType<Apartment>
	columns: ColumnDef<Apartment>[]
}

export default function ApartmentsTable({ table, columns }: ApartmentsTabelProps) {
	return (
		<div className="bg-background overflow-hidden rounded-md border">
			<Table className="table-fixed">
				<ApartmentTableHeader table={table} />
				<ApartmentTableBody table={table} columns={columns} />
			</Table>
		</div>
	)
}

