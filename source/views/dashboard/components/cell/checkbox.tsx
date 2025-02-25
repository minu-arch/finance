import { Checkbox } from "@ui/checkbox"
import type { Row, CellContext } from "@tanstack/react-table"

interface CheckboxCellProps<T> {
	row: Row<T>
}

export default function CheckboxCell<T>({ row }: CellContext<T, unknown>) {
	return (
		<Checkbox
			checked={row.getIsSelected()}
			onCheckedChange={(checked) => row.toggleSelected(!!checked)}
			aria-label="Select row"
		/>
	)
}
