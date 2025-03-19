import { Button } from "@ui/button"
import { PlusIcon } from "lucide-react"

export default function AddApartmentButton() {
	return (
		<div className="flex items-center gap-3">
			<Button className="ml-auto" variant="outline">
				<PlusIcon className="-ms-1 opacity-60" size={16} aria-hidden="true" />
				Adaugă apartamente
			</Button>
		</div>
	)
}
