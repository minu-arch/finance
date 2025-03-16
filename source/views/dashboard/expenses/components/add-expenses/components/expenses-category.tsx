import { SelectValue } from "@ui/select"
import { Label } from "@ui/label"
import { SelectTrigger } from "@ui/select"
import { SelectContent } from "@ui/select"
import { SelectItem } from "@ui/select"
import { Select } from "@ui/select"
import type { ExpenseFormData } from "../expenses.types"

interface ExpensesCategoryProps {
	formData: ExpenseFormData
	setFormData: React.Dispatch<React.SetStateAction<ExpenseFormData>>
}

export default function ExpensesCategory({
	formData,
	setFormData,
}: ExpensesCategoryProps) {
	return (
		<div className="grid gap-2">
			<Label htmlFor="category">Categorie</Label>
			<Select
				value={formData.category}
				onValueChange={(value) => setFormData({ ...formData, category: value })}
			>
				<SelectTrigger>
					<SelectValue placeholder="Selectează categoria" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="utilities">Utilități</SelectItem>
					<SelectItem value="maintenance">Întreținere</SelectItem>
					<SelectItem value="repairs">Reparații</SelectItem>
					<SelectItem value="cleaning">Curățenie</SelectItem>
					<SelectItem value="other">Altele</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}
