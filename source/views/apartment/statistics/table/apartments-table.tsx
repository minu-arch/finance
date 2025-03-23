import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import { Table } from "@ui/table"
import RevenueTableBody from "./components/revenue-table-body"
import RevenueTableHeader from "./components/revenue-table-header"
import { memo } from "react"
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

const ApartmentsRevenueTable = memo(function ApartmentsRevenueTable() {
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
					<RevenueTableHeader />
					<RevenueTableBody
						apartmentsData={apartmentsData as unknown as Record<string, number>[]}
						minValue={minValue}
						maxValue={maxValue}
						getHeatmapColor={getHeatmapColor}
					/>
				</Table>
			</CardContent>
		</Card>
	)
})

export default ApartmentsRevenueTable
