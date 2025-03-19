import { Dialog, DialogContent } from "@ui/dialog"
import { useState } from "react"
import { format } from "date-fns"
import { ro } from "date-fns/locale"
import type { Expense, ExpenseCategory, ExpenseFormData } from "./expenses.types"
import ExpensesModalFooter from "./expenses-modal-footer"
import ExpensesModalMain from "./expenses-modal-main"
import ExpensesModalHeader from "./expenses-modal-header"

interface AddExpenseModalProps {
	open: boolean
	onOpenChange: (open: boolean) => void
	onSubmit: (data: Expense) => void
}

// function to generate the id
const generateId = () => {
	return Date.now().toString() + Math.floor(Math.random() * 1000).toString()
}

export default function AddExpenseModal({
	open,
	onOpenChange,
	onSubmit,
}: AddExpenseModalProps) {
	// initialize formData with default values
	const [formData, setFormData] = useState<ExpenseFormData>({
		apartmentId: "",
		category: "",
		description: "",
		amount: "",
		date: undefined,
	})

	// function to reset the form
	const resetForm = () => {
		setFormData({
			apartmentId: "",
			category: "",
			description: "",
			amount: "",
			date: undefined,
		})
	}

	// handle the closing of the modal
	const handleOpenChange = (newOpen: boolean) => {
		if (!newOpen) {
			resetForm()
		}
		onOpenChange(newOpen)
	}

	// handle the submission of the form
	const handleSubmit = () => {
		// basic validation
		if (!formData.apartmentId || !formData.category || !formData.date) {
			alert("Te rugăm să completezi toate câmpurile obligatorii!")
			return
		}

		// create the expense object
		const expense: Expense = {
			id: generateId(),
			apartmentId: formData.apartmentId,
			category: formData.category as ExpenseCategory,
			description: formData.description,
			amount: Number.parseFloat(formData.amount) || 0,
			date: format(formData.date, "yyyy-MM-dd", { locale: ro }),
		}

		// send the data
		onSubmit(expense)

		// close the modal
		handleOpenChange(false)
	}

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogContent
				className="sm:max-w-[425px]"
				aria-describedby="Adaugă cheltuială nouă"
				aria-labelledby="Adaugă cheltuială nouă"
			>
				<ExpensesModalHeader />
				<ExpensesModalMain formData={formData} setFormData={setFormData} />
				<ExpensesModalFooter
					handleOpenChange={handleOpenChange}
					handleSubmit={handleSubmit}
				/>
			</DialogContent>
		</Dialog>
	)
}
