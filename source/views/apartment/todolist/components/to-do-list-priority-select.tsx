import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui/select"

interface ToDoListPrioritySelectProps {
	priority: "high" | "medium" | "low"
	setPriority: (value: "high" | "medium" | "low") => void
}

export default function ToDoListPrioritySelect({
	priority,
	setPriority,
}: ToDoListPrioritySelectProps) {
	return (
		<Select
			value={priority}
			onValueChange={(value) => setPriority(value as "high" | "medium" | "low")}
		>
			<SelectTrigger className="w-32">
				<SelectValue placeholder="Prioritate" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="high" className="text-red-500">
					Înaltă
				</SelectItem>
				<SelectItem value="medium" className="text-orange-500">
					Medie
				</SelectItem>
				<SelectItem value="low" className="text-blue-500">
					Scăzută
				</SelectItem>
			</SelectContent>
		</Select>
	)
}
