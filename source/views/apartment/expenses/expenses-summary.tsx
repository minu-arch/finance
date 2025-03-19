import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import { mockData, calculateTotalExpenses } from "./expenses.data"

export default function ExpensesSummary() {
	const totalExpenses = calculateTotalExpenses(mockData)

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<Card>
				<CardHeader>
					<CardTitle className="text-sm font-medium">Total Cheltuieli </CardTitle>
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">
						{new Intl.NumberFormat("ro-RO", {
							style: "currency",
							currency: "RON",
						}).format(totalExpenses)}
					</div>
					<p className="text-xs text-muted-foreground">Luna curentă</p>
				</CardContent>
			</Card>
		</div>
	)
}
