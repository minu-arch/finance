export type ExpenseCategory =
	| "utilities"
	| "maintenance"
	| "repairs"
	| "cleaning"
	| "other"

export interface Expense {
	id: string
	apartmentId: string
	date: string
	category: ExpenseCategory
	description: string
	amount: number
	receipt?: string
}

export interface ApartmentSummary {
	apartmentId: string
	totalAmount: number
	lastExpenseDate: string
	expenseCount: number
}

// Funcție pentru a genera sumarul apartamentelor
export const generateApartmentSummaries = (expenses: Expense[]): ApartmentSummary[] => {
	const apartments = ["ap101", "ap102", "ap103", "ap104"]

	return apartments.map((apartmentId) => {
		const apartmentExpenses = expenses.filter((exp) => exp.apartmentId === apartmentId)
		const lastExpense = apartmentExpenses.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
		)[0]

		return {
			apartmentId,
			totalAmount: apartmentExpenses.reduce((sum, exp) => sum + exp.amount, 0),
			lastExpenseDate: lastExpense?.date || "",
			expenseCount: apartmentExpenses.length,
		}
	})
}

export const mockData: Expense[] = [
	//  Apartment 101
	{
		id: "1",
		apartmentId: "ap101",
		date: "2024-03-01",
		category: "utilities",
		description: "Factura energie electrică",
		amount: 250,
	},
	{
		id: "2",
		apartmentId: "ap101",
		date: "2024-03-05",
		category: "maintenance",
		description: "Întreținere lunară",
		amount: 150,
	},
	{
		id: "3",
		apartmentId: "ap101",
		date: "2024-03-10",
		category: "repairs",
		description: "Reparație robinet baie",
		amount: 100,
	},

	// Apartment 102
	{
		id: "4",
		apartmentId: "ap102",
		date: "2024-03-02",
		category: "utilities",
		description: "Factura gaz",
		amount: 180,
	},
	{
		id: "5",
		apartmentId: "ap102",
		date: "2024-03-07",
		category: "maintenance",
		description: "Întreținere lunară",
		amount: 150,
	},
	{
		id: "6",
		apartmentId: "ap102",
		date: "2024-03-15",
		category: "cleaning",
		description: "Curățenie generală",
		amount: 200,
	},

	// Apartment 103
	{
		id: "7",
		apartmentId: "ap103",
		date: "2024-03-03",
		category: "utilities",
		description: "Factura apă",
		amount: 120,
	},
	{
		id: "8",
		apartmentId: "ap103",
		date: "2024-03-08",
		category: "repairs",
		description: "Reparație ușă intrare",
		amount: 300,
	},

	// Apartment 104
	{
		id: "9",
		apartmentId: "ap104",
		date: "2024-03-04",
		category: "utilities",
		description: "Factura internet",
		amount: 60,
	},
	{
		id: "10",
		apartmentId: "ap104",
		date: "2024-03-12",
		category: "maintenance",
		description: "Întreținere lunară",
		amount: 150,
	},
]

// Helper functions for calculations
export const calculateTotalExpenses = (expenses: Expense[]): number => {
	return expenses.reduce((total, expense) => total + expense.amount, 0)
}

export const calculateApartmentExpenses = (
	expenses: Expense[],
	apartmentId: string,
): number => {
	return expenses
		.filter((expense) => expense.apartmentId === apartmentId)
		.reduce((total, expense) => total + expense.amount, 0)
}

export const calculateExpensesByCategory = (
	expenses: Expense[],
	category: ExpenseCategory,
): number => {
	return expenses
		.filter((expense) => expense.category === category)
		.reduce((total, expense) => total + expense.amount, 0)
}

export const calculateMonthlyAverage = (expenses: Expense[]): number => {
	const total = calculateTotalExpenses(expenses)
	return total
}
