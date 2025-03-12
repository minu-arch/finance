import type { CellContext } from "@tanstack/react-table"
import type { ApartmentSummary } from "@/views/dashboard/expenses/expenses.data"

export default function ApartmentCell({ row }: CellContext<ApartmentSummary, unknown>) {
	const apartmentId = row.original.apartmentId
	return <div className="font-medium">Apartament {apartmentId.replace("ap", "")}</div>
}
