import { useState } from "react"
import { Card } from "@ui/card"
import ToDoListHeader from "./components/to-do-list-header"
import { INITIAL_TASKS, DAYS_OF_WEEK } from "./to-do-list.sample"
import ToDoListMain from "./components/to-do-list-main"
import type { Task } from "./to-do-list.types"

export default function WeeklyTodoList() {
	const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS as Task[])
	const [newTask, setNewTask] = useState("")
	const [selectedDay, setSelectedDay] = useState("Monday")
	const [currentDate, setCurrentDate] = useState(new Date())
	const [priority, setPriority] = useState<"high" | "medium" | "low">("medium")
	const handleAddTask = () => {
		if (newTask.trim() !== "") {
			setTasks([
				...tasks,
				{
					id: tasks.length + 1,
					day: selectedDay,
					text: newTask,
					completed: false,
					priority,
				},
			])
			setNewTask("")
		}
	}

	const handleToggleTask = (taskId: number) => {
		setTasks(
			tasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task,
			),
		)
	}

	return (
		<div className="space-y-4 p-4 size-full mx-auto">
			<Card className="size-full shadow-none border-none">
				<ToDoListHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />
				<ToDoListMain
					tasks={tasks}
					newTask={newTask}
					setNewTask={setNewTask}
					selectedDay={selectedDay}
					setSelectedDay={setSelectedDay}
					onAddTask={handleAddTask}
					onToggleTask={handleToggleTask}
					currentDate={currentDate}
					daysOfWeek={DAYS_OF_WEEK}
					priority={priority}
					setPriority={setPriority}
				/>
			</Card>
		</div>
	)
}
