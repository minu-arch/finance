import { Input } from "@ui/input"
import { Label } from "@ui/label"
import type { Apartment } from "@/views/apartment/apartments/data"

export default function FormCheckOut({
	formData,
	setFormData,
}: { formData: Apartment; setFormData: (formData: Apartment) => void }) {
	return (
		<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="checkOut" className="text-right">
				Check Out
			</Label>
			<Input
				id="checkOut"
				type="date"
				value={formData.checkOut || ""}
				onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
				className="col-span-3"
			/>
		</div>
	)
}
