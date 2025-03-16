export interface ExpenseFormData {
	apartmentId: string
	category: string
	description: string
	amount: string
	date?: Date
}

export type ExpenseCategory =
	| "utilities"
	| "maintenance"
	| "repairs"
	| "cleaning"
	| "other"

export interface Expense {
	id: string
	apartmentId: string
	category: ExpenseCategory
	description: string
	amount: number
	date: string
}
