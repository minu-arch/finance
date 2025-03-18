import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "@ui/card"
import { useEffect, useState } from "react"
import {
	Sun,
	Cloud,
	Moon,
	CloudMoon,
	CheckCircle2,
	Circle,
	CalendarDays,
} from "lucide-react"
import { format } from "date-fns"
import { ro } from "date-fns/locale"
import { Button } from "@ui/button"
import { Progress } from "@ui/progress"
import { Badge } from "@ui/badge"
import { Separator } from "@ui/separator"
// Eliminăm importul useNavigate

// Simulăm task-urile pentru ziua curentă
interface Task {
	id: number
	text: string
	completed: boolean
	priority: "high" | "medium" | "low"
}

export default function Dashboard() {
	const [greeting, setGreeting] = useState("Hello")
	const [subGreeting, setSubGreeting] = useState("")
	const [icon, setIcon] = useState<React.ReactNode>(null)
	const [todaysTasks, setTodaysTasks] = useState<Task[]>([])

	// Simulăm încărcarea task-urilor
	useEffect(() => {
		// În practică, acestea ar veni de la un API
		const mockTasks: Task[] = [
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

	// Calculăm progresul task-urilor
	const completedTasks = todaysTasks.filter((task) => task.completed).length
	const totalTasks = todaysTasks.length
	const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0

	useEffect(() => {
		// Obține ora curentă
		const currentHour = new Date().getHours()
		const currentDay = new Date().getDay()
		const isWeekend = currentDay === 0 || currentDay === 6

		// Setează salutul și mesajul suplimentar în funcție de ora zilei
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

	// Înlocuim funcția de navigare cu o funcție simplă care folosește window.location
	const handleViewAllTasks = () => {
		window.location.href = "/dashboard/todolist"
		// Alternativ, poți folosi:
		// document.querySelector('a[href="/dashboard/todolist"]')?.click()
	}

	return (
		<div className="space-y-4 p-4 size-full mx-auto flex flex-col gap-4">
			<Card className="w-full max-w-3xl mx-auto">
				<CardHeader className="text-center pb-2">
					<div className="flex items-center justify-center gap-2 mb-2">
						{icon}
						<CardTitle className="text-2xl font-bold">{greeting}, Anca</CardTitle>
					</div>
					<CardDescription className="text-base">{subGreeting}</CardDescription>
				</CardHeader>

				<CardContent className="pb-2">
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

					<div className="mb-4">
						<div className="flex justify-between text-sm mb-1">
							<span>Progress</span>
							<span>
								{completedTasks}/{totalTasks} completed
							</span>
						</div>
						<Progress value={progressPercentage} className="h-2" />
					</div>

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

				<CardFooter className="pt-0">
					<Button variant="outline" className="w-full" onClick={handleViewAllTasks}>
						View All Tasks
					</Button>
				</CardFooter>
			</Card>

			<CardContent className="max-w-3xl mx-auto w-full">
				<CardTitle>Dashboard Overview</CardTitle>
			</CardContent>
		</div>
	)
}
