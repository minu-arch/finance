import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import { GridLayout } from "@/views/apartment/components/grid-layout"
import { Wallet, Building2, Receipt, TrendingUp, HandCoins } from "lucide-react"
import {
	mockData,
	calculateTotalExpenses,
	calculateApartmentExpenses,
	calculateExpensesByCategory,
} from "@/views/apartment/expenses/expenses.data"

export default function ExpenseDescription() {
	const totalExpenses = calculateTotalExpenses(mockData)
	const ap101Expenses = calculateApartmentExpenses(mockData, "ap101")
	const utilitiesExpenses = calculateExpensesByCategory(mockData, "utilities")
	const monthlyAverage = totalExpenses

	return (
		<GridLayout columns={4} className="my-2 gap-2">
			<Card className="bg-red-300 hover:bg-red-300/80 hover:cursor-default">
				<CardHeader>
					<div className="flex flex-col items-start gap-2">
						<div className="rounded-full bg-red-400 p-2">
							<Wallet className="size-4" />
						</div>
						<CardTitle className="text-sm font-medium dark:text-black">
							Total Cheltuieli
						</CardTitle>
					</div>
				</CardHeader>
				<CardContent className="mb-2">
					<div className="text-2xl font-bold dark:text-black">
						{new Intl.NumberFormat("ro-RO", {
							style: "currency",
							currency: "RON",
						}).format(totalExpenses)}
					</div>
					<p className="text-xs text-muted-foreground dark:text-black">Luna curentă</p>
				</CardContent>
			</Card>

			<Card className="bg-orange-200 hover:bg-orange-200/80 hover:cursor-default">
				<CardHeader>
					<div className="flex flex-col items-start gap-2">
						<div className="rounded-full bg-orange-300 p-2">
							<HandCoins className="size-4" />
						</div>
						<CardTitle className="text-sm font-medium dark:text-black">
							Cheltuieli Ap.101
						</CardTitle>
					</div>
				</CardHeader>
				<CardContent className="mb-2">
					<div className="text-2xl font-bold dark:text-black">
						{new Intl.NumberFormat("ro-RO", {
							style: "currency",
							currency: "RON",
						}).format(ap101Expenses)}
					</div>
					<p className="text-xs text-muted-foreground dark:text-black">Luna curentă</p>
				</CardContent>
			</Card>

			<Card className="bg-green-200 hover:bg-green-200/80 hover:cursor-default">
				<CardHeader>
					<div className="flex flex-col items-start gap-2">
						<div className="rounded-full bg-green-300 p-2">
							<Building2 className="size-4" />
						</div>
						<CardTitle className="text-sm font-medium dark:text-black">
							Utilități
						</CardTitle>
					</div>
				</CardHeader>
				<CardContent className="mb-2">
					<div className="text-2xl font-bold dark:text-black">
						{new Intl.NumberFormat("ro-RO", {
							style: "currency",
							currency: "RON",
						}).format(utilitiesExpenses)}
					</div>
					<p className="text-xs text-muted-foreground dark:text-black">Luna curentă</p>
				</CardContent>
			</Card>

			<Card className="bg-violet-200 hover:bg-violet-200/80 hover:cursor-default">
				<CardHeader>
					<div className="flex flex-col items-start gap-2">
						<div className="rounded-full bg-violet-300 p-2">
							<TrendingUp className="size-4" />
						</div>
						<CardTitle className="text-sm font-medium dark:text-black">
							Media Lunară
						</CardTitle>
					</div>
				</CardHeader>
				<CardContent className="mb-2">
					<div className="text-2xl font-bold dark:text-black">
						{new Intl.NumberFormat("ro-RO", {
							style: "currency",
							currency: "RON",
						}).format(monthlyAverage)}
					</div>
					<p className="text-xs text-muted-foreground dark:text-black">
						Ultimele 6 luni
					</p>
				</CardContent>
			</Card>
		</GridLayout>
	)
}
