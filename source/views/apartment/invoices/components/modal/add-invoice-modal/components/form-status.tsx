import { SelectContent, SelectTrigger, SelectValue } from "@ui/select"
import { SelectItem } from "@ui/select"
import { Label } from "@ui/label"
import { Select } from "@ui/select"

export default function FormStatus({
	value,
	onValueChange,
}: {
	value: string
	onValueChange: (value: string) => void
}) {
	return (
		<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="status" className="text-right">
				Status
			</Label>
			<Select value={value} onValueChange={(value) => onValueChange(value)}>
				<SelectTrigger className="col-span-3">
					<SelectValue placeholder="Selectează status" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="Paid">Plătită</SelectItem>
					<SelectItem value="Pending">În așteptare</SelectItem>
					<SelectItem value="Overdue">Restantă</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}
