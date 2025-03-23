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
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import { memo } from "react"

// example data for multiple apartments
const apartmentsData = [
	{ month: "May", "Apt 101": 186, "Apt 102": 120, "Apt 103": 150, "Apt 104": 90 },
	{ month: "June", "Apt 101": 305, "Apt 102": 240, "Apt 103": 230, "Apt 104": 180 },
	{ month: "July", "Apt 101": 237, "Apt 102": 230, "Apt 103": 210, "Apt 104": 150 },
	{ month: "August", "Apt 101": 173, "Apt 102": 160, "Apt 103": 190, "Apt 104": 140 },
	{
		month: "September",
		"Apt 101": 209,
		"Apt 102": 190,
		"Apt 103": 200,
		"Apt 104": 160,
	},
	{ month: "October", "Apt 101": 214, "Apt 102": 220, "Apt 103": 240, "Apt 104": 190 },
]

const colors = {
	"Apt 101": "#8884d8",
	"Apt 102": "#82ca9d",
	"Apt 103": "#ffc658",
	"Apt 104": "#ff8042",
}

const ApartmentsRevenueChart = memo(function ApartmentsRevenueChart() {
	const currentYear = new Date().getFullYear()
	return (
		<Card className="w-full h-[500px] shadow-[0_0_10px_rgba(0,0,0,0.1)] border-accent">
			<CardHeader>
				<CardTitle>Venituri pe apartamente (Mai - Octombrie {currentYear})</CardTitle>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width="100%" height={400}>
					<BarChart
						data={apartmentsData}
						margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="month" />
						<YAxis />
						<Tooltip />
						<Legend />
						{Object.keys(colors).map((apartment) => (
							<Bar
								key={apartment}
								dataKey={apartment}
								fill={colors[apartment as keyof typeof colors]}
								name={apartment}
							/>
						))}
					</BarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	)
})

export default ApartmentsRevenueChart
