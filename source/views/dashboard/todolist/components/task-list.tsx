import { Badge } from "@ui/badge"
import { CheckCircle2, Circle } from "lucide-react"
import type { Task } from "../to-do-list.types"

interface TaskListProps {
	tasks: Task[]
	day: string
	onToggleTask: (id: string) => void
}

export default function TaskList({ tasks, day, onToggleTask }: TaskListProps) {
	const filteredTasks = tasks.filter((task) => task.day === day)

	return (
		<div className="flex-1 p-4 overflow-auto">
			{filteredTasks.length === 0 ? (
				<div className="flex h-full items-center justify-center text-sm text-muted-foreground">
					Nicio sarcină pentru această zi
				</div>
			) : (
				<div className="space-y-2">
					{filteredTasks.map((task) => (
						<div
							key={task.id}
							className="flex items-start gap-2 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer"
							onClick={() => onToggleTask(task.id.toString())}
							tabIndex={0}
							role="button"
							aria-label={`Sarcină: ${task.text}`}
							onKeyDown={(e) => e.key === "Enter" && onToggleTask(task.id.toString())}
						>
							<div className="mt-0.5">
								{task.completed ? (
									<CheckCircle2 className="size-4 text-primary" />
								) : (
									<Circle className="size-4 text-muted-foreground" />
								)}
							</div>
							<div className="flex-1">
								<p
									className={`${task.completed ? "line-through text-muted-foreground" : "text-foreground"}`}
								>
									{task.text}
								</p>
							</div>
							<Badge
								variant="outline"
								className={`
									${
										task.priority === "high"
											? "border-red-500 text-red-500"
											: task.priority === "medium"
												? "border-orange-500 text-orange-500"
												: "border-blue-500 text-blue-500"
									}
								`}
							>
								{task.priority}
							</Badge>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
