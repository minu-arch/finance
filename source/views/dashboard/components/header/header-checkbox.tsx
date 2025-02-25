import { Checkbox } from "@/theme/components/ui/checkbox"
import type { HeaderContext } from "@tanstack/react-table"

export default function HeaderCheckbox<T>({ table }: HeaderContext<T, unknown>) {
	return (
		<Checkbox
			checked={
				table.getIsAllPageRowsSelected() ||
				(table.getIsSomePageRowsSelected() && "indeterminate")
			}
			onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
			aria-label="Select all"
			className="translate-y-[2px]"
		/>
	)
}
