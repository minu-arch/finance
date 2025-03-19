import type { CellContext } from "@tanstack/react-table"
import type { ApartmentSummary } from "@/views/apartment/expenses/expenses.data"

export default function AmountCell({
	getValue,
}: CellContext<ApartmentSummary, unknown>) {
	const amount = getValue() as number
	return new Intl.NumberFormat("ro-RO", {
		style: "currency",
		currency: "RON",
	}).format(amount)
}
