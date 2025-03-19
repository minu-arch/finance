import { Input } from "@ui/input"
import { Label } from "@ui/label"

export default function FormDueDate({
	dueDate,
	handleChange,
}: {
	dueDate: string
	handleChange: (field: string, value: string) => void
}) {
	return (
		<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="dueDate" className="text-right">
				Data Scadenței
			</Label>
			<Input
				id="dueDate"
				type="date"
				value={dueDate}
				onChange={(e) => handleChange("dueDate", e.target.value)}
				className="col-span-3"
			/>
		</div>
	)
}
