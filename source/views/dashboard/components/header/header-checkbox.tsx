import { Checkbox } from "@/theme/components/ui/checkbox"
import type { HeaderContext } from "@tanstack/react-table"
import { useEffect, useState } from "react"

export default function HeaderCheckbox<T>({ table }: HeaderContext<T, unknown>) {
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
	const isChecked = mounted
		? table.getIsAllPageRowsSelected() ||
			(table.getIsSomePageRowsSelected() && "indeterminate")
		: false

	// safe function to update the selection
	const handleCheckedChange = (value: boolean) => {
		if (mounted) {
			table.toggleAllPageRowsSelected(!!value)
		}
	}

	return (
		<Checkbox
			checked={isChecked}
			onCheckedChange={handleCheckedChange}
			aria-label="Select all"
			className="translate-y-[2px]"
		/>
	)
}
