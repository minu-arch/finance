import { Badge } from "@ui/badge"
import { cn } from "@/theme/lib/utils"
import type { Row } from "@tanstack/react-table"
import type { Apartment } from "@/views/apartment/apartments/data"

interface SourceCellProps {
	row: Row<Apartment>
}

export default function SourceCell({ row }: SourceCellProps) {
	const source = row.getValue("source") as "Booking" | "Manual" | null

	if (!source) return <span className="text-gray-400 text-xs">-</span>

	return (
		<Badge
			className={cn(
				"inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
				source === "Booking"
					? "bg-blue-100 text-blue-800"
					: "bg-purple-100 text-purple-800",
			)}
		>
			{source}
		</Badge>
	)
}
