import { Dialog, DialogContent } from "@ui/dialog"
import { useState } from "react"
import type { Apartment } from "@/views/dashboard/apartments/data"
import ModalHeader from "./components/modal-header"
import ModalFooter from "./components/modal-footer"
import ModalForm from "./components/modal-form"

interface EditModalProps {
	apartment: Apartment
	isOpen: boolean
	onClose: () => void
	onSave: (updatedApartment: Apartment) => void
}

export default function EditModal({
	apartment,
	isOpen,
	onClose,
	onSave,
}: EditModalProps) {
	const [formData, setFormData] = useState<Apartment>(apartment)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		onSave(formData)
		onClose()
	}

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent
				className="sm:max-w-[425px]"
				aria-describedby="Editare Apartament"
				aria-labelledby="Editare Apartament"
			>
				<ModalHeader />
				<form onSubmit={handleSubmit}>
					<ModalForm formData={formData} setFormData={setFormData} />
					<ModalFooter onClose={onClose} />
				</form>
			</DialogContent>
		</Dialog>
	)
}
