import { Checkbox } from "@ui/checkbox"
import type { Row, CellContext } from "@tanstack/react-table"
import { useEffect, useState } from "react"

interface CheckboxCellProps<T> {
	row: Row<T>
}

export default function CheckboxCell<T>({ row }: CellContext<T, unknown>) {
	// use a local state to control the checkbox state
	const [mounted, setMounted] = useState(false)

	// check if the component is mounted before updating the state
	useEffect(() => {
		setMounted(true)
		return () => {
			setMounted(false)
		}
	}, [])

	// calculate the state of the checkbox only if the component is mounted
	const isChecked = mounted ? row.getIsSelected() : false

	// safe function to update the selection
	const handleCheckedChange = (checked: boolean) => {
		if (mounted) {
			row.toggleSelected(!!checked)
		}
	}

	return (
		<Checkbox
			checked={isChecked}
			onCheckedChange={handleCheckedChange}
			aria-label="Select row"
		/>
	)
}
