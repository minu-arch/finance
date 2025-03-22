import { TableCell, TableRow } from "@ui/table"
import { TableBody } from "@ui/table"

interface RevenueTableBodyProps {
	apartmentsData: Record<string, number>[]
	minValue: number
	maxValue: number
	getHeatmapColor: (value: number, min: number, max: number) => string
}

export default function RevenueTableBody({
	apartmentsData,
	minValue,
	maxValue,
	getHeatmapColor,
}: RevenueTableBodyProps) {
	return (
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
	)
}
