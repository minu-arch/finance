import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@ui/table"

// example data
const apartmentsData = [
	{
		apartment: "Apt 101",
		may: 186,
		june: 305,
		july: 237,
		august: 173,
		september: 209,
		october: 214,
		total: 1324,
	},
	{
		apartment: "Apt 102",
		may: 120,
		june: 240,
		july: 230,
		august: 160,
		september: 190,
		october: 220,
		total: 1160,
	},
	{
		apartment: "Apt 103",
		may: 150,
		june: 230,
		july: 210,
		august: 190,
		september: 200,
		october: 240,
		total: 1220,
	},
	{
		apartment: "Apt 104",
		may: 90,
		june: 180,
		july: 150,
		august: 140,
		september: 160,
		october: 190,
		total: 910,
	},
]

// function to generate the color based on the value
function getHeatmapColor(value: number, min: number, max: number) {
	// generate a color between light red and light green
	const ratio = (value - min) / (max - min)
	const r = Math.floor(255 - ratio * 200)
	const g = Math.floor(100 + ratio * 155)
	const b = 100
	return `rgba(${r}, ${g}, ${b}, 0.2)`
}

export function ApartmentsRevenueTable() {
	// find the minimum and maximum values for color scaling
	const allValues = apartmentsData.flatMap((apt) => [
		apt.may,
		apt.june,
		apt.july,
		apt.august,
		apt.september,
		apt.october,
	])
	const minValue = Math.min(...allValues)
	const maxValue = Math.max(...allValues)
	const currentYear = new Date().getFullYear()

	return (
		<Card className="w-full shadow-[0_0_10px_rgba(0,0,0,0.1)] border-none">
			<CardHeader>
				<CardTitle>Venituri lunare pe apartamente ({currentYear})</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Apartament</TableHead>
							<TableHead>Mai</TableHead>
							<TableHead>Iunie</TableHead>
							<TableHead>Iulie</TableHead>
							<TableHead>August</TableHead>
							<TableHead>Septembrie</TableHead>
							<TableHead>Octombrie</TableHead>
							<TableHead>Total</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{apartmentsData.map((row) => (
							<TableRow key={row.apartment}>
								<TableCell className="font-medium">{row.apartment}</TableCell>
								<TableCell
									style={{
										backgroundColor: getHeatmapColor(row.may, minValue, maxValue),
									}}
								>
									{row.may} €
								</TableCell>
								<TableCell
									style={{
										backgroundColor: getHeatmapColor(row.june, minValue, maxValue),
									}}
								>
									{row.june} €
								</TableCell>
								<TableCell
									style={{
										backgroundColor: getHeatmapColor(row.july, minValue, maxValue),
									}}
								>
									{row.july} €
								</TableCell>
								<TableCell
									style={{
										backgroundColor: getHeatmapColor(row.august, minValue, maxValue),
									}}
								>
									{row.august} €
								</TableCell>
								<TableCell
									style={{
										backgroundColor: getHeatmapColor(row.september, minValue, maxValue),
									}}
								>
									{row.september} €
								</TableCell>
								<TableCell
									style={{
										backgroundColor: getHeatmapColor(row.october, minValue, maxValue),
									}}
								>
									{row.october} €
								</TableCell>
								<TableCell className="font-bold">{row.total} €</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}
