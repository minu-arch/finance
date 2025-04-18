import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui/select"
import type { Apartment } from "@/views/apartment/apartments/data"
import { Label } from "@ui/label"

export default function FormSource({
	formData,
	setFormData,
}: { formData: Apartment; setFormData: (formData: Apartment) => void }) {
	return (
		<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="source" className="text-right">
				Sursă
			</Label>
			<Select
				value={formData.source || ""}
				onValueChange={(value: string) => {
					const sourceValue = value === "" ? null : (value as "Booking" | "Manual")
					setFormData({ ...formData, source: sourceValue })
				}}
			>
				<SelectTrigger className="col-span-3">
					<SelectValue placeholder="Selectează sursa" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="Booking">Booking</SelectItem>
					<SelectItem value="Manual">Manual</SelectItem>
					<SelectItem value="">Nicio sursă</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}
