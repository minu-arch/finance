import { Button } from "@ui/button"
import { DialogFooter } from "@ui/dialog"

export default function ExpensesModalFooter({
	handleOpenChange,
	handleSubmit,
}: {
	handleOpenChange: (open: boolean) => void
	handleSubmit: () => void
}) {
	return (
		<DialogFooter aria-describedby="Footer" aria-labelledby="Footer">
			<Button
				onClick={() => handleOpenChange(false)}
				variant="outline"
				aria-describedby="Cancel"
				aria-labelledby="Cancel"
			>
				Anulează
			</Button>
			<Button onClick={handleSubmit} aria-describedby="Save" aria-labelledby="Save">
				Salvează
			</Button>
		</DialogFooter>
	)
}
