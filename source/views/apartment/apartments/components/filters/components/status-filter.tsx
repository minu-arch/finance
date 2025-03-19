import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/theme/components/ui/select"
import type { Apartment } from "@/views/apartment/apartments/data"
import type { Table } from "@tanstack/react-table"

type StatusFilterProps = {
	table: Table<Apartment>
	id: string
	inputRef: React.RefObject<HTMLInputElement>
	selectedStatuses: string[]
	handleStatusChange: (checked: boolean, value: string) => void
	uniqueStatusValues: string[]
	statusCounts: Map<string, number>
}
export default function StatusFilter({ table }: StatusFilterProps) {
	return (
		<Select
			value={(table.getColumn("status")?.getFilterValue() as string) ?? ""}
			onValueChange={(value) =>
				table.getColumn("status")?.setFilterValue(value === "all" ? "" : value)
			}
		>
			<SelectTrigger className="max-w-[130px]">
				<SelectValue placeholder="Select status" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="all">Toate</SelectItem>
				<SelectItem value="Liber">Libere</SelectItem>
				<SelectItem value="Ocupate">Ocupate</SelectItem>
			</SelectContent>
		</Select>
	)
}
