import {
	Line,
	CartesianGrid,
	Legend,
	Tooltip,
	XAxis,
	LineChart,
	YAxis,
	ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"

interface TabsContentProfitProps {
	apartmentData: Record<string, { revenue: number; expenses: number }>
	selectedApartment: string
}

export default function TabsContentProfit({
	apartmentData,
	selectedApartment,
}: TabsContentProfitProps) {
	const apartmentInfo = apartmentData[selectedApartment]

	const chartData = apartmentInfo
		? Object.entries(apartmentInfo).map(([month, values]) => ({
				month,
				profit: values.revenue - values.expenses,
				revenue: values.revenue,
				expenses: values.expenses,
			}))
		: []

	return (
		<Card className="shadow-[0_0_10px_rgba(0,0,0,0.1)] border-accent">
			<CardHeader>
				<CardTitle>Profit Lunar</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[400px]">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart
							data={chartData}
							margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" tick={{ fill: "currentColor" }} />
							<YAxis tick={{ fill: "currentColor" }} />
							<Tooltip
								contentStyle={{
									backgroundColor: "rgba(255, 255, 255, 0.8)",
									border: "1px solid #ccc",
								}}
							/>
							<Legend />
							<Line
								type="monotone"
								dataKey="profit"
								name="Profit"
								stroke="#8884d8"
								strokeWidth={2}
								dot={{ r: 4 }}
								activeDot={{ r: 8 }}
							/>
							<Line
								type="monotone"
								dataKey="revenue"
								name="Venituri"
								stroke="#82ca9d"
								strokeWidth={2}
								dot={{ r: 4 }}
							/>
							<Line
								type="monotone"
								dataKey="expenses"
								name="Cheltuieli"
								stroke="#ff7300"
								strokeWidth={2}
								dot={{ r: 4 }}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	)
}
