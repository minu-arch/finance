import { Calendar } from "lucide-react"
import { format, addDays, startOfWeek } from "date-fns"
import { TypographyH4 } from "@/views/apartment/components/typography"

interface PanelGroupHeaderProps {
	day: string
	index: number
	currentDate: Date
}

export default function PanelGroupHeader({
	day,
	index,
	currentDate,
}: PanelGroupHeaderProps) {
	const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 })
	const dayDate = addDays(startOfCurrentWeek, index)

	return (
		<div className="flex items-center flex-col justify-between px-4 py-2 border-b bg-muted">
			<TypographyH4 className="font-semibold flex items-center">
				<Calendar className="mr-2 size-4" />
				{day}
			</TypographyH4>

			<span className="text-sm text-muted-foreground">{format(dayDate, "MMM d")}</span>
		</div>
	)
}
