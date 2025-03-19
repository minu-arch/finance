import { Input } from "@ui/input"
import { Label } from "@ui/label"

export default function FormSeriesNumber({
	seriesNumber,
	handleChange,
}: {
	seriesNumber: string
	handleChange: (field: string, value: string) => void
}) {
	return (
		<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="invoiceNumber" className="text-right">
				Serie/Număr
			</Label>
			<Input
				id="invoiceNumber"
				value={seriesNumber}
				onChange={(e) => handleChange("invoiceNumber", e.target.value)}
				className="col-span-3"
				placeholder="Număr factură"
			/>
		</div>
	)
}
