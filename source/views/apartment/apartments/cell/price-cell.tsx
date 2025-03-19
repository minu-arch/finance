import type { CellContext } from "@tanstack/react-table"
import type { Apartment } from "@/views/apartment/apartments/data"

export default function PriceCell({ getValue }: CellContext<Apartment, unknown>) {
	const amount = Number(getValue())
	return `${amount} €`
}
