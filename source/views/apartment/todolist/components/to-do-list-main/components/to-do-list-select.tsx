import { DAYS_OF_WEEK } from "@/views/apartment/todolist/to-do-list.sample"
import {
	Select,
	SelectItem,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from "@ui/select"

interface ToDoListSelectProps {
	selectedDay: string
	setSelectedDay: (value: string) => void
}

export default function ToDoListSelect({
	selectedDay,
	setSelectedDay,
}: ToDoListSelectProps) {
	return (
		<Select value={selectedDay} onValueChange={setSelectedDay}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a day" />
			</SelectTrigger>
			<SelectContent>
				{DAYS_OF_WEEK.map((day) => (
					<SelectItem key={day} value={day}>
						{day}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
