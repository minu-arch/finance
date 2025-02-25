import type { Apartment } from "@/views/dashboard/apartments/data"
import { Input } from "@ui/input"
import { Label } from "@ui/label"

export default function FormLocation({
	formData,
	setFormData,
}: { formData: Apartment; setFormData: (formData: Apartment) => void }) {
	return (
		<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="location" className="text-right">
				Location
			</Label>
			<Input
				id="location"
				value={formData.location}
				onChange={(e) => setFormData({ ...formData, location: e.target.value })}
				className="col-span-3"
			/>
		</div>
	)
}
