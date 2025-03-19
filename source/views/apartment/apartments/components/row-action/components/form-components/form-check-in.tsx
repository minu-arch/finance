import { Input } from "@ui/input"
import { Label } from "@ui/label"
import type { Apartment } from "@/views/apartment/apartments/data"

export default function FormCheckIn({
	formData,
	setFormData,
}: { formData: Apartment; setFormData: (formData: Apartment) => void }) {
	return (
		<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="checkIn" className="text-right">
				Check In
			</Label>
			<Input
				id="checkIn"
				type="date"
				value={formData.checkIn || ""}
				onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
				className="col-span-3"
			/>
		</div>
	)
}
