import type { HeaderContext } from "@tanstack/react-table"
import type { Apartment } from "@/views/dashboard/apartments/data"

export default function HeaderAction({ column }: HeaderContext<Apartment, unknown>) {
	return <span className="sr-only">Actiuni</span>
}
