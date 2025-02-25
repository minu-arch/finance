import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui/select"
import type { Apartment } from "@/views/dashboard/apartments/data"
import { Label } from "@ui/label"

export default function FormStatus({
	formData,
	setFormData,
}: { formData: Apartment; setFormData: (formData: Apartment) => void }) {
	return (
		<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="status" className="text-right">
				Status
			</Label>
			<Select
				value={formData.status}
				onValueChange={(value: "Liber" | "Ocupat") =>
					setFormData({ ...formData, status: value })
				}
			>
				<SelectTrigger className="col-span-3">
					<SelectValue placeholder="Select status" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="Liber">Liber</SelectItem>
					<SelectItem value="Ocupat">Ocupat</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}
