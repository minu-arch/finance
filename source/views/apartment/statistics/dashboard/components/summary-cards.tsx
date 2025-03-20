import { CardContent, CardHeader, CardTitle } from "@ui/card"
import { Card } from "@ui/card"

interface SummaryCardsProps {
	totalRevenue: number
	totalExpenses: number
	totalProfit: number
}

export default function SummaryCards({
	totalRevenue,
	totalExpenses,
	totalProfit,
}: SummaryCardsProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
			<Card className="bg-red-200">
				<CardHeader className="pb-2">
					<CardTitle className="text-sm dark:text-background">Total Venituri</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-2xl font-bold dark:text-background">{totalRevenue} €</p>
				</CardContent>
			</Card>

			<Card className="bg-green-100">
				<CardHeader className="pb-2">
					<CardTitle className="text-sm dark:text-background">
						Total Cheltuieli
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-2xl font-bold dark:text-background">{totalExpenses} €</p>
				</CardContent>
			</Card>

			<Card className="bg-violet-100">
				<CardHeader className="pb-2">
					<CardTitle className="text-sm dark:text-background">Profit</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-2xl font-bold dark:text-background">{totalProfit} €</p>
				</CardContent>
			</Card>
		</div>
	)
}
