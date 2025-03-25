import { CardContent } from "@ui/card"
import type { Task } from "@/views/apartment/todolist/to-do-list.types"
import ToDoListInput from "./components/to-do-list-input"
import ToDoListSelect from "./components/to-do-list-select"
import ToDoListButton from "./components/to-do-list-button"
import TaskList from "./components/task-list"
import { GridLayout } from "@/views/apartment/components/grid-layout"
import PanelGroupHeader from "./components/panel-grup-header"
import ToDoListPrioritySelect from "./components/to-do-list-priority-select"

interface ToDoListMainProps {
	tasks: Task[]
	newTask: string
	setNewTask: (value: string) => void
	selectedDay: string
	setSelectedDay: (value: string) => void
	priority: "high" | "medium" | "low" | undefined
	setPriority: (value: "high" | "medium" | "low") => void
	onAddTask: () => void
	onToggleTask: (taskId: number) => void
	currentDate: Date
	daysOfWeek: string[]
	isPriorityInvalid: boolean
	setIsPriorityInvalid: (value: boolean) => void
}

export default function ToDoListMain({
	tasks,
	newTask,
	setNewTask,
	selectedDay,
	setSelectedDay,
	priority,
	setPriority,
	onAddTask,
	onToggleTask,
	currentDate,
	daysOfWeek,
	isPriorityInvalid,
	setIsPriorityInvalid,
}: ToDoListMainProps) {
	if (!daysOfWeek || !Array.isArray(daysOfWeek)) {
		daysOfWeek = [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
		]
	}

	return (
		<CardContent className="p-0">
			<div className="space-y-4">
				<div className="flex flex-col sm:flex-row gap-2">
					<ToDoListInput
						newTask={newTask}
						setNewTask={setNewTask}
						onAddTask={onAddTask}
					/>
					<ToDoListPrioritySelect
						priority={priority}
						setPriority={setPriority}
						isInvalid={isPriorityInvalid}
						setIsInvalid={setIsPriorityInvalid}
					/>
					<ToDoListSelect selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
					<ToDoListButton onAddTask={onAddTask} />
				</div>

				{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4"> */}
				<GridLayout columns={4} className="gap-4">
					{daysOfWeek.map((day, index) => (
						<div
							key={day}
							className="flex flex-col h-[400px] rounded-lg border bg-card overflow-hidden"
						>
							<PanelGroupHeader day={day} index={index} currentDate={currentDate} />
							<TaskList
								tasks={tasks}
								day={day}
								onToggleTask={(id: string) => onToggleTask(Number(id))}
							/>
						</div>
					))}
				</GridLayout>
				{/* </div> */}
			</div>
		</CardContent>
	)
}
