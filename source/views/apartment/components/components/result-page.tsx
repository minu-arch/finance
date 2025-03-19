import { Select, SelectItem, SelectTrigger, SelectValue } from "@ui/select"
import { Label } from "@ui/label"
import { SelectContent } from "@ui/select"
import type { Table } from "@tanstack/react-table"

type ResultPageProps<T> = {
	table: Table<T>
	id: string
	pageSizeOptions: number[]
}

export default function ResultPage<T>({
	table,
	id,
	pageSizeOptions,
}: ResultPageProps<T>) {
	return (
		<div className="flex items-center gap-3">
			<Label htmlFor={id} className="max-sm:sr-only">
				Rows per page
			</Label>
			<Select
				value={table.getState().pagination.pageSize.toString()}
				onValueChange={(value) => {
					table.setPageSize(Number(value))
				}}
			>
				<SelectTrigger id={id} className="w-fit whitespace-nowrap">
					<SelectValue placeholder="Select number of results" />
				</SelectTrigger>
				<SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2">
					{pageSizeOptions.map((pageSize) => (
						<SelectItem key={pageSize} value={pageSize.toString()}>
							{pageSize}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
