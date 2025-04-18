import type { Apartment } from "@/views/apartment/apartments/data"
import FormName from "./form-components/from-name"
import FormLocation from "./form-components/form-location"
import FormStatus from "./form-components/form-status"
import FormPrice from "./form-components/form-price"
import FormRooms from "./form-components/form-rooms"
import FormCheckIn from "./form-components/form-check-in"
import FormCheckOut from "./form-components/form-check-out"
import FormSource from "./form-components/form-source"

export default function ModalForm({
	formData,
	setFormData,
}: { formData: Apartment; setFormData: (formData: Apartment) => void }) {
	return (
		<div className="grid gap-4 py-4">
			<FormName formData={formData} setFormData={setFormData} />
			<FormLocation formData={formData} setFormData={setFormData} />
			<FormStatus formData={formData} setFormData={setFormData} />
			<FormSource formData={formData} setFormData={setFormData} />
			<FormPrice formData={formData} setFormData={setFormData} />
			<FormRooms formData={formData} setFormData={setFormData} />
			<FormCheckIn formData={formData} setFormData={setFormData} />
			<FormCheckOut formData={formData} setFormData={setFormData} />
		</div>
	)
}
