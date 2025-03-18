import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui/select"
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
	LineChart,
	Line,
	PieChart,
	Pie,
	Cell,
} from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs"
import { useState } from "react"

// Date pentru fiecare apartament (istoricul veniturilor)
const apartmentData = {
	"Apt 101": [
		{ month: "May", revenue: 186, expenses: 50, profit: 136 },
		{ month: "June", revenue: 305, expenses: 70, profit: 235 },
		{ month: "July", revenue: 237, expenses: 60, profit: 177 },
		{ month: "August", revenue: 173, expenses: 55, profit: 118 },
		{ month: "September", revenue: 209, expenses: 65, profit: 144 },
		{ month: "October", revenue: 214, expenses: 75, profit: 139 },
	],
	"Apt 102": [
		{ month: "May", revenue: 120, expenses: 40, profit: 80 },
		{ month: "June", revenue: 240, expenses: 60, profit: 180 },
		{ month: "July", revenue: 230, expenses: 55, profit: 175 },
		{ month: "August", revenue: 160, expenses: 45, profit: 115 },
		{ month: "September", revenue: 190, expenses: 50, profit: 140 },
		{ month: "October", revenue: 220, expenses: 65, profit: 155 },
	],
	// ... date pentru alte apartamente
}

// Date pentru rezumat pe categorii
const categorySummary = {
	"Apt 101": [
		{ name: "Chirie", value: 1200 },
		{ name: "Utilități", value: 224 },
		{ name: "Întreținere", value: 150 },
	],
	"Apt 102": [
		{ name: "Chirie", value: 1000 },
		{ name: "Utilități", value: 180 },
		{ name: "Întreținere", value: 120 },
	],
	// ... date pentru alte apartamente
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]

export function ApartmentDashboard() {
	const [selectedApartment, setSelectedApartment] = useState("Apt 101")

	// Calculează sumarul financiar
	const totalRevenue = apartmentData[
		selectedApartment as keyof typeof apartmentData
	].reduce((sum: number, month: { revenue: number }) => sum + month.revenue, 0)
	const totalExpenses = apartmentData[
		selectedApartment as keyof typeof apartmentData
	].reduce((sum: number, month: { expenses: number }) => sum + month.expenses, 0)
	const totalProfit = totalRevenue - totalExpenses

	return (
		<div className="space-y-4">
			<div className="flex justify-between items-center">
				<CardTitle className="text-xl">Dashboard Apartament</CardTitle>
				<Select value={selectedApartment} onValueChange={setSelectedApartment}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Selectează apartament" />
					</SelectTrigger>
					<SelectContent>
						{Object.keys(apartmentData).map((apt) => (
							<SelectItem key={apt} value={apt}>
								{apt}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			{/* Summary Cards */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<Card className="bg-blue-50">
					<CardHeader className="pb-2">
						<CardTitle className="text-sm">Total Venituri</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-2xl font-bold">{totalRevenue} €</p>
					</CardContent>
				</Card>

				<Card className="bg-red-50">
					<CardHeader className="pb-2">
						<CardTitle className="text-sm">Total Cheltuieli</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-2xl font-bold">{totalExpenses} €</p>
					</CardContent>
				</Card>

				<Card className="bg-green-50">
					<CardHeader className="pb-2">
						<CardTitle className="text-sm">Profit</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-2xl font-bold">{totalProfit} €</p>
					</CardContent>
				</Card>
			</div>

			{/* Charts */}
			<Tabs defaultValue="revenue">
				<TabsList className="w-full">
					<TabsTrigger value="revenue" className="flex-1">
						Venituri & Cheltuieli
					</TabsTrigger>
					<TabsTrigger value="profit" className="flex-1">
						Profit
					</TabsTrigger>
					<TabsTrigger value="categories" className="flex-1">
						Categorii
					</TabsTrigger>
				</TabsList>

				<TabsContent value="revenue">
					<Card>
						<CardHeader>
							<CardTitle>Venituri și Cheltuieli Lunare</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="h-[400px]">
								<ResponsiveContainer width="100%" height="100%">
									<BarChart
										data={
											apartmentData[selectedApartment as keyof typeof apartmentData]
										}
										margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
									>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="month" />
										<YAxis />
										<Tooltip />
										<Legend />
										<Bar dataKey="revenue" name="Venituri" fill="#8884d8" />
										<Bar dataKey="expenses" name="Cheltuieli" fill="#82ca9d" />
									</BarChart>
								</ResponsiveContainer>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="profit">
					<Card>
						<CardHeader>
							<CardTitle>Profit Lunar</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="h-[400px]">
								<ResponsiveContainer width="100%" height="100%">
									<LineChart
										data={
											apartmentData[selectedApartment as keyof typeof apartmentData]
										}
										margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
									>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="month" />
										<YAxis />
										<Tooltip />
										<Legend />
										<Line
											type="monotone"
											dataKey="profit"
											name="Profit"
											stroke="#8884d8"
											activeDot={{ r: 8 }}
										/>
									</LineChart>
								</ResponsiveContainer>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="categories">
					<Card>
						<CardHeader>
							<CardTitle>Rezumat pe Categorii</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="h-[400px]">
								<ResponsiveContainer width="100%" height="100%">
									<PieChart>
										<Pie
											data={
												categorySummary[
													selectedApartment as keyof typeof categorySummary
												]
											}
											cx="50%"
											cy="50%"
											labelLine={true}
											label={({ name, percent }) =>
												`${name}: ${(percent * 100).toFixed(0)}%`
											}
											outerRadius={150}
											fill="#8884d8"
											dataKey="value"
										>
											{categorySummary[
												selectedApartment as keyof typeof categorySummary
											].map((entry: { value: number }, index: number) => (
												<Cell
													key={`cell-${index}`}
													fill={COLORS[index % COLORS.length]}
												/>
											))}
										</Pie>
										<Tooltip formatter={(value) => `${value} €`} />
									</PieChart>
								</ResponsiveContainer>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}
