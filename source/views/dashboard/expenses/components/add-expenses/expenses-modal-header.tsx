import { DialogDescription, DialogTitle } from "@ui/dialog"
import { DialogHeader } from "@ui/dialog"

export default function ExpensesModalHeader() {
	return (
		<DialogHeader aria-describedby="Header" aria-labelledby="Header">
			<DialogTitle aria-describedby="Title" aria-labelledby="Title">
				Adaugă cheltuială nouă
			</DialogTitle>
			<DialogDescription aria-describedby="Description" aria-labelledby="Description">
				Adaugă o nouă cheltuială pentru apartament
			</DialogDescription>
		</DialogHeader>
	)
}
