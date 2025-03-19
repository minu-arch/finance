import { DialogDescription, DialogHeader, DialogTitle } from "@ui/dialog"

export default function ModalHeader() {
	return (
		<DialogHeader>
			<DialogTitle>Edit Apartment</DialogTitle>
			<DialogDescription>
				Make changes to the apartment details here. Click save when you're done.
			</DialogDescription>
		</DialogHeader>
	)
}
