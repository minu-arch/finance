import { Badge } from "@ui/badge"
import type { CellContext } from "@tanstack/react-table"
import type { ApartmentSummary } from "@/views/apartment/expenses/expenses.data"

export default function CountCell({
	getValue,
}: CellContext<ApartmentSummary, unknown>) {
	const count = getValue() as number
	return <Badge variant="secondary">{count}</Badge>
}
