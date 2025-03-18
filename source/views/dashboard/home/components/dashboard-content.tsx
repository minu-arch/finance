import { CardContent } from "@ui/card"
import { CheckCircle2, Circle } from "lucide-react"
import { Badge } from "@ui/badge"
import { Separator } from "@ui/separator"
import type { Task } from "@/views/dashboard/todolist/to-do-list.types"
import ContentCalendar from "./components/content-calendar"
import ContentProgress from "./components/content-progress"

interface DashboardContentProps {
	totalTasks: number
	completedTasks: number
	progressPercentage: number
	todaysTasks: Task[]
	handleToggleTask: (taskId: number) => void
}

export default function DashboardContent({
	totalTasks,
	completedTasks,
	progressPercentage,
	todaysTasks,
	handleToggleTask,
}: DashboardContentProps) {
	return (
		<CardContent className="pb-2">
			<ContentCalendar totalTasks={totalTasks} />
			<ContentProgress
				completedTasks={completedTasks}
				totalTasks={totalTasks}
				progressPercentage={progressPercentage}
			/>

			<Separator className="my-4" />

			<div className="space-y-3">
				<h3 className="font-medium text-sm text-muted-foreground mb-2">
					TODAY'S TASKS
				</h3>

				{todaysTasks.length === 0 ? (
					<p className="text-center text-muted-foreground py-4">
						No tasks for today. Enjoy your day!
					</p>
				) : (
					<div className="space-y-2">
						{todaysTasks.slice(0, 4).map((task) => (
							<div
								key={task.id}
								className="flex items-start gap-2 p-2 rounded-md hover:bg-accent/50 transition-colors cursor-pointer"
								onClick={() => handleToggleTask(task.id)}
							>
								<div className="mt-0.5">
									{task.completed ? (
										<CheckCircle2 className="size-5 text-primary" />
									) : (
										<Circle className="size-5 text-muted-foreground" />
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

						{todaysTasks.length > 4 && (
							<p className="text-center text-sm text-muted-foreground">
								+{todaysTasks.length - 4} more tasks
							</p>
						)}
					</div>
				)}
			</div>
		</CardContent>
	)
}
