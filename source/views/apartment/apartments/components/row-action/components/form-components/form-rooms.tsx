import { Input } from "@ui/input"
import { Label } from "@ui/label"
import type { Apartment } from "@/views/apartment/apartments/data"

export default function FormRooms({
	formData,
	setFormData,
}: { formData: Apartment; setFormData: (formData: Apartment) => void }) {
	return (
		<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="rooms" className="text-right">
				Rooms
			</Label>
			<Input
				id="rooms"
				type="number"
				value={formData.rooms}
				onChange={(e) => setFormData({ ...formData, rooms: Number(e.target.value) })}
				className="col-span-3"
			/>
		</div>
	)
}
