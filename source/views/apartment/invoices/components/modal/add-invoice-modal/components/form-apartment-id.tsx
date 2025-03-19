import { Input } from "@ui/input"
import { Label } from "@ui/label"

export default function FormApartmentId({
	apartmentId,
	handleChange,
}: {
	apartmentId: string
	handleChange: (field: string, value: string) => void
}) {
	return (
		<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="apartmentId" className="text-right">
				Apartament
			</Label>
			<Input
				id="apartmentId"
				value={apartmentId}
				onChange={(e) => handleChange("apartmentId", e.target.value)}
				className="col-span-3"
				placeholder="ID Apartament"
			/>
		</div>
	)
}
