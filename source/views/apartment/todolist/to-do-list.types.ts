export interface Task {
	id: number
	day: string
	text: string
	completed: boolean
	priority: "high" | "medium" | "low"
}
