import { Checkbox } from "@ui/checkbox"
import { Label } from "@ui/label"
import { ScrollArea } from "@ui/scroll-area"
import type { Task } from "../to-do-list.types"

interface TaskListProps {
	tasks: Task[]
	day: string
	onToggleTask: (id: string) => void
}

export default function TaskList({ tasks, day, onToggleTask }: TaskListProps) {
	return (
		<ScrollArea className="flex-1 p-4">
			<div className="space-y-2">
				{tasks
					.filter((task) => task.day === day)
					.map((task) => (
						<div key={task.id} className="flex items-center space-x-2">
							<Checkbox
								id={`task-${task.id}`}
								checked={task.completed}
								onCheckedChange={() => onToggleTask(task.id.toString())}
							/>
							<Label
								htmlFor={`task-${task.id}`}
								className={task.completed ? "line-through text-gray-500" : ""}
							>
								{task.text}
							</Label>
						</div>
					))}
			</div>
		</ScrollArea>
	)
}
