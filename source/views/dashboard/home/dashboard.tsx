import { Card } from "@ui/card"
import { useEffect, useState } from "react"
import { Sun, Cloud, Moon, CloudMoon } from "lucide-react"
import { useNavigate } from "react-router"
import DashboardHeader from "./components/dashboard-header"
import DashboardContent from "./components/dashboard-content"
import DashboardFooter from "./components/dashboard-footer"
import type { Task } from "@/views/dashboard/todolist/to-do-list.types"

// simulate the tasks for the current day
interface DashboardTask {
	id: number
	text: string
	completed: boolean
	priority: "high" | "medium" | "low"
}

export default function Dashboard() {
	const navigate = useNavigate()
	const [greeting, setGreeting] = useState("Hello")
	const [subGreeting, setSubGreeting] = useState("")
	const [icon, setIcon] = useState<React.ReactNode>(null)
	const [todaysTasks, setTodaysTasks] = useState<DashboardTask[]>([])

	// simulate the loading of the tasks
	useEffect(() => {
		// in practice, these would come from an API
		const mockTasks: DashboardTask[] = [
			{ id: 1, text: "Revizuire raport financiar", completed: false, priority: "high" },
			{
				id: 2,
				text: "Întâlnire cu echipa de marketing",
				completed: true,
				priority: "medium",
			},
			{
				id: 3,
				text: "Actualizare statistici apartamente",
				completed: false,
				priority: "medium",
			},
			{
				id: 4,
				text: "Verificare facturi restante",
				completed: false,
				priority: "high",
			},
			{ id: 5, text: "Răspunde la emailuri", completed: true, priority: "low" },
		]

		setTodaysTasks(mockTasks)
	}, [])

	// calculate the progress of the tasks
	const completedTasks = todaysTasks.filter((task) => task.completed).length
	const totalTasks = todaysTasks.length
	const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0

	useEffect(() => {
		// get the current hour
		const currentHour = new Date().getHours()
		const currentDay = new Date().getDay()
		const isWeekend = currentDay === 0 || currentDay === 6

		// set the greeting and the sub greeting in function of the hour of the day
		if (currentHour >= 5 && currentHour < 12) {
			setGreeting("Good Morning")

			const morningMessages = [
				"Ready to start a productive day?",
				"A fresh start awaits you!",
				"Time for your morning coffee!",
				"Hope you had a restful night!",
				"Let's make today count!",
			]

			if (isWeekend) {
				morningMessages.push(
					"Enjoy your weekend morning!",
					"No rush today, it's the weekend!",
					"Time to relax and recharge!",
				)
			}

			setSubGreeting(
				morningMessages[Math.floor(Math.random() * morningMessages.length)],
			)
			setIcon(<Sun className="size-6 text-yellow-500" />)
		} else if (currentHour >= 12 && currentHour < 18) {
			setGreeting("Good Afternoon")

			const afternoonMessages = [
				"How's your day going so far?",
				"Keep up the good work!",
				"Don't forget to take short breaks!",
				"Stay hydrated and focused!",
				"The day is still young!",
			]

			if (isWeekend) {
				afternoonMessages.push(
					"Enjoying your weekend?",
					"Perfect time for weekend activities!",
					"Hope you're having a relaxing day!",
				)
			}

			setSubGreeting(
				afternoonMessages[Math.floor(Math.random() * afternoonMessages.length)],
			)
			setIcon(<Cloud className="size-6 text-blue-400" />)
		} else if (currentHour >= 18 && currentHour < 22) {
			setGreeting("Good Evening")

			const eveningMessages = [
				"Time to wind down!",
				"How was your day?",
				"Don't forget to relax a bit!",
				"Wrapping up for today?",
				"The day is coming to a close!",
			]

			if (isWeekend) {
				eveningMessages.push(
					"Enjoying your weekend evening?",
					"Time for some weekend fun!",
					"Perfect time to unwind!",
				)
			}

			setSubGreeting(
				eveningMessages[Math.floor(Math.random() * eveningMessages.length)],
			)
			setIcon(<CloudMoon className="size-6 text-indigo-400" />)
		} else {
			setGreeting("Good Night")

			const nightMessages = [
				"Working late? Don't forget to rest!",
				"Time to get some sleep!",
				"Sweet dreams ahead!",
				"Remember to rest well!",
				"Tomorrow is another day!",
			]

			setSubGreeting(nightMessages[Math.floor(Math.random() * nightMessages.length)])
			setIcon(<Moon className="size-6 text-indigo-600" />)
		}
	}, [])

	const handleToggleTask = (taskId: number) => {
		setTodaysTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task,
			),
		)
	}

	// replace the navigation function with a simple function that uses window.location
	const handleViewAllTasks = () => {
		navigate("/dashboard/todolist")
	}

	return (
		<div className="space-y-4 p-4 size-full mx-auto flex flex-col gap-4">
			<Card className="w-full max-w-3xl mx-auto">
				<DashboardHeader icon={icon} greeting={greeting} subGreeting={subGreeting} />

				<DashboardContent
					totalTasks={totalTasks}
					completedTasks={completedTasks}
					progressPercentage={progressPercentage}
					todaysTasks={todaysTasks as Task[]}
					handleToggleTask={handleToggleTask}
				/>

				<DashboardFooter handleViewAllTasks={handleViewAllTasks} />
			</Card>
		</div>
	)
}
