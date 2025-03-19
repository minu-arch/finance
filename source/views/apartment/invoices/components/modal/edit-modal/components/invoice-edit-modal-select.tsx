import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui/select"
import { Label } from "@ui/label"

interface InvoiceEditModalSelectProps {
	handleSelectChange: (value: string) => void
	formData: {
		status: string
	}
}
export default function InvoiceEditModalSelect({
	handleSelectChange,
	formData,
}: InvoiceEditModalSelectProps) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
			<Label htmlFor="status" className="sm:text-right">
				Status
			</Label>
			<Select onValueChange={handleSelectChange} defaultValue={formData.status}>
				<SelectTrigger className="col-span-3">
					<SelectValue placeholder="Selectează statusul" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="Platita">Plătită</SelectItem>
					<SelectItem value="Neplatita">Neplătită</SelectItem>
					<SelectItem value="Anulata">Anulată</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}
