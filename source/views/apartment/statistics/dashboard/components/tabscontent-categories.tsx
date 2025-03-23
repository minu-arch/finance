import { Cell, Tooltip, Pie, PieChart, ResponsiveContainer } from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@ui/card"

interface TabsContentCategoriesProps {
	categorySummary: Record<string, { value: number }[]>
	selectedApartment: string
	COLORS: string[]
}

export default function TabsContentCategories({
	categorySummary,
	selectedApartment,
	COLORS,
}: TabsContentCategoriesProps) {
	return (
		<Card className="shadow-[0_0_10px_rgba(0,0,0,0.1)] border-accent">
			<CardHeader>
				<CardTitle>Rezumat pe Categorii</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[400px]">
					<ResponsiveContainer width="100%" height="100%">
						<PieChart>
							<Pie
								data={
									categorySummary[selectedApartment as keyof typeof categorySummary]
								}
								cx="50%"
								cy="50%"
								labelLine={true}
								label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
								outerRadius={150}
								fill="#8884d8"
								dataKey="value"
							>
								{categorySummary[selectedApartment as keyof typeof categorySummary].map(
									(entry: { value: number }, index: number) => (
										<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
									),
								)}
							</Pie>
							<Tooltip formatter={(value) => `${value} €`} />
						</PieChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	)
}
