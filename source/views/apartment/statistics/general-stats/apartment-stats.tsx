import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts"
import { DollarSign, ArrowUp, ArrowDown } from "lucide-react"
import { memo } from "react"

const monthlyData = [
	{ month: "May", revenue: 1200, expenses: 350, profit: 850 },
	{ month: "June", revenue: 1500, expenses: 400, profit: 1100 },
	{ month: "July", revenue: 1400, expenses: 380, profit: 1020 },
	{ month: "August", revenue: 1300, expenses: 360, profit: 940 },
	{ month: "September", revenue: 1450, expenses: 390, profit: 1060 },
	{ month: "October", revenue: 1550, expenses: 410, profit: 1140 },
]

const apartmentPerformance = [
	{
		id: "apt101",
		name: "Apartament 101",
		revenue: 4500,
		change: 12.5,
		trend: "up",
		occupancy: 95,
		color: "#0088FE",
	},
	{
		id: "apt102",
		name: "Apartament 102",
		revenue: 3800,
		change: -4.2,
		trend: "down",
		occupancy: 88,
		color: "#00C49F",
	},
	{
		id: "apt103",
		name: "Apartament 103",
		revenue: 4200,
		change: 8.1,
		trend: "up",
		occupancy: 92,
		color: "#FFBB28",
	},
	{
		id: "apt104",
		name: "Apartament 104",
		revenue: 3600,
		change: 3.5,
		trend: "up",
		occupancy: 85,
		color: "#FF8042",
	},
]

const ApartmentCards = memo(function ApartmentCards() {
	return (
		<div className="grid grid-cols-1 gap-4">
			{apartmentPerformance.map((apartment) => (
				<Card
					key={apartment.id}
					className="shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden border-accent"
				>
					<div className="flex items-start p-4">
						<div
							style={{ backgroundColor: apartment.color }}
							className="size-12 rounded-md flex items-center justify-center mr-4"
						>
							<DollarSign className="size-6 text-white" />
						</div>
						<div className="flex-1">
							<h3 className="font-medium">{apartment.name}</h3>
							<div className="flex items-baseline">
								<span className="text-2xl font-bold mr-2">{apartment.revenue} €</span>
								<div
									className={`flex items-center ${apartment.trend === "up" ? "text-green-600" : "text-red-600"}`}
								>
									{apartment.trend === "up" ? (
										<ArrowUp className="size-4" />
									) : (
										<ArrowDown className="size-4" />
									)}
									<span className="text-sm">{Math.abs(apartment.change)}%</span>
								</div>
							</div>
						</div>
						<div className="text-right">
							<span className="text-sm text-gray-500">Rata ocupare</span>
							<div className="text-lg font-semibold">{apartment.occupancy}%</div>
						</div>
					</div>
					<div className="h-1" style={{ backgroundColor: apartment.color }} />
				</Card>
			))}
		</div>
	)
})

const RevenueChart = memo(function RevenueChart() {
	return (
		<Card className="shadow-[0_0_10px_rgba(0,0,0,0.1)]">
			<CardHeader>
				<CardTitle>Total venituri lunare</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[300px]">
					<ResponsiveContainer width="100%" height="100%">
						<BarChart
							data={monthlyData}
							margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="revenue" name="Venituri" fill="#8884d8" />
							<Bar dataKey="profit" name="Profit" fill="#82ca9d" />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	)
})

const MonthlyCards = memo(function MonthlyCards() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
			{monthlyData.slice(-6).map((month) => (
				<Card
					key={month.month}
					className="shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:border"
				>
					<CardHeader className="pb-2">
						<CardTitle className="text-base">{month.month} 2025</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-2">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-500">Venituri</span>
								<span className="font-medium">{month.revenue} €</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-500">Cheltuieli</span>
								<span className="font-medium">{month.expenses} €</span>
							</div>
							<div className="flex justify-between items-center pt-2 border-t">
								<span className="text-sm font-medium">Profit</span>
								<span className="font-bold">{month.profit} €</span>
							</div>
							<div className="flex justify-between items-center pt-2 mb-2">
								<span className="text-sm text-gray-500">Marjă profit</span>
								<span className="font-medium text-green-600">
									{((month.profit / month.revenue) * 100).toFixed(1)}%
								</span>
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	)
})

// Componenta principală
export function ApartmentStatsOverview() {
	return (
		<div className="space-y-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<RevenueChart />
				<ApartmentCards />
			</div>
			<MonthlyCards />
		</div>
	)
}
