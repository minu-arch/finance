import type { Invoice } from "@/views/dashboard/invoices/invoice.data"
import { Input } from "@ui/input"
import { Label } from "@ui/label"

export default function FormPrice({
	invoice,
	handleChange,
}: {
	invoice: Invoice
	handleChange: (field: string, value: string) => void
}) {
	return (
		<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="amount" className="text-right">
				Sumă
			</Label>
			<Input
				id="amount"
				type="number"
				value={invoice.amount}
				onChange={(e) => handleChange("amount", e.target.value)}
				className="col-span-3"
				placeholder="0.00"
			/>
		</div>
	)
}
