import type { CellContext } from "@tanstack/react-table"
import type { Apartment } from "../data"

export default function FullnameCell({ getValue }: CellContext<Apartment, unknown>) {
	const fullname = getValue() as string
	return <div className="font-medium">{fullname}</div>
}
