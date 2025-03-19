import { Input } from "@ui/input"
import { Label } from "@ui/label"

export default function FormClient({
	client,
	handleChange,
}: {
	client: string
	handleChange: (field: string, value: string) => void
}) {
	return (
		<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="client" className="text-right">
				Client
			</Label>
			<Input
				id="client"
				value={client}
				onChange={(e) => handleChange("client", e.target.value)}
				className="col-span-3"
				placeholder="Nume client"
			/>
		</div>
	)
}
