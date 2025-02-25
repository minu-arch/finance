import type { Apartment } from "@/views/dashboard/apartments/data"
import { Input } from "@ui/input"
import { Label } from "@ui/label"

export default function FormName({
	formData,
	setFormData,
}: { formData: Apartment; setFormData: (formData: Apartment) => void }) {
	return (
		<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="name" className="text-right">
				Name
			</Label>
			<Input
				id="name"
				value={formData.name}
				onChange={(e) => setFormData({ ...formData, name: e.target.value })}
				className="col-span-3"
			/>
		</div>
	)
}
