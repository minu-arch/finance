import { Badge } from "@/theme/components/ui/badge"
import { ro } from "date-fns/locale"
import { CalendarDays } from "lucide-react"
import { format } from "date-fns"

interface ContentCalendarProps {
	totalTasks: number
}

export default function ContentCalendar({ totalTasks }: ContentCalendarProps) {
	return (
		<div className="flex items-center justify-between mb-2">
			<div className="flex items-center gap-2">
				<CalendarDays className="size-5 text-muted-foreground" />
				<h3 className="font-medium">
					{format(new Date(), "EEEE, d MMMM", { locale: ro })}
				</h3>
			</div>
			<Badge variant="outline" className="font-normal">
				{totalTasks} task{totalTasks !== 1 ? "s" : ""}
			</Badge>
		</div>
	)
}
