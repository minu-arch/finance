import { format } from "date-fns"
import { ro } from "date-fns/locale"
import type { CellContext } from "@tanstack/react-table"
import type { ApartmentSummary } from "@/views/apartment/expenses/expenses.data"

export default function DateCell({ getValue }: CellContext<ApartmentSummary, unknown>) {
	const date = getValue() as string
	return date ? format(new Date(date), "dd MMMM yyyy", { locale: ro }) : "-"
}
