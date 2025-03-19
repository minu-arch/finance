import type { CellContext } from "@tanstack/react-table"
import type { Invoice } from "../invoice.data"

export default function InvoiceStatus({ row }: CellContext<Invoice, unknown>) {
	const status = row.getValue("status") as string

	return (
		<div
			className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
      ${
				status === "Paid"
					? "bg-green-100 text-green-800"
					: status === "Pending"
						? "bg-yellow-100 text-yellow-800"
						: "bg-red-100 text-red-800"
			}`}
		>
			{status}
		</div>
	)
}
