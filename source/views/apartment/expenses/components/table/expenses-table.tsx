import { Table } from "@ui/table"
import type { Table as TableType } from "@tanstack/react-table"
import type { ApartmentSummary } from "@/views/apartment/expenses/expenses.data"
import ExpensesTableHeader from "@/views/apartment/expenses/components/table/components/expenses-table-header"
import ExpensesTableBody from "@/views/apartment/expenses/components/table/components/expenses-table-body"
interface ExpensesTableProps {
	table: TableType<ApartmentSummary>
}

export default function ExpensesTable({ table }: ExpensesTableProps) {
	return (
		<div className="rounded-md border">
			<Table>
				<ExpensesTableHeader table={table} />
				<ExpensesTableBody table={table} />
			</Table>
		</div>
	)
}
