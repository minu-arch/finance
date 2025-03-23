import { CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"
import { BarChart, Bar } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import { ResponsiveContainer } from "recharts"

interface TabsContentRevenueProps {
	apartmentData: Record<string, { revenue: number; expenses: number }>
	selectedApartment: string
}

export default function TabsContentRevenue({
	apartmentData,
	selectedApartment,
}: TabsContentRevenueProps) {
	return (
		<Card className="shadow-[0_0_10px_rgba(0,0,0,0.1)] border-accent">
			<CardHeader>
				<CardTitle>Venituri și Cheltuieli Lunare</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[400px]">
					<ResponsiveContainer width="100%" height="100%">
						<BarChart
							data={
								Array.isArray(apartmentData[selectedApartment])
									? apartmentData[selectedApartment]
									: [apartmentData[selectedApartment]]
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
	)
}
