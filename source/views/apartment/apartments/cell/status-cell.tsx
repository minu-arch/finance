import { Badge } from "@ui/badge"
import { Button } from "@ui/button"
import { cn } from "@/theme/lib/utils"
import type { Row } from "@tanstack/react-table"
import type { Apartment } from "@/views/apartment/apartments/data"

interface StatusCellProps {
	row: Row<Apartment>
}

export default function StatusCell({ row }: StatusCellProps) {
	const status = row.getValue("status") as "Liber" | "Ocupat"

	const toggleStatus = async () => {
		// here will be the logic for the status change
		// for now we only log the change
		console.log(
			`Changing status from ${status} to ${status === "Liber" ? "Ocupat" : "Liber"}`,
		)
	}

	return (
		<Button variant="ghost" onClick={toggleStatus} className="p-0 hover:bg-transparent">
			<Badge
				className={cn(
					"inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
					status === "Ocupat"
						? "bg-red-100 text-red-800"
						: "bg-green-100 text-green-800",
				)}
			>
				{status}
			</Badge>
		</Button>
	)
}
