import { TableHead, TableRow, TableHeader } from "@ui/table"
import { flexRender } from "@tanstack/react-table"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { cn } from "@/theme/lib/utils"
import type { Table } from "@tanstack/react-table"
import type { ApartmentSummary } from "@/views/apartment/expenses/expenses.data"

interface ExpensesTableHeaderProps {
	table: Table<ApartmentSummary>
}

export default function ExpensesTableHeader({ table }: ExpensesTableHeaderProps) {
	return (
		<TableHeader>
			{table.getHeaderGroups().map((headerGroup) => (
				<TableRow key={headerGroup.id} className="hover:bg-transparent">
					{headerGroup.headers.map((header) => {
						return (
							<TableHead
								key={header.id}
								style={{ width: `${header.getSize()}px` }}
								className="h-11"
							>
								{header.isPlaceholder ? null : header.column.getCanSort() ? (
									<button
										className={cn(
											header.column.getCanSort() &&
												"flex size-full cursor-pointer items-center justify-between gap-2 select-none",
										)}
										onClick={header.column.getToggleSortingHandler()}
										onKeyDown={(e) => {
											if (
												header.column.getCanSort() &&
												(e.key === "Enter" || e.key === " ")
											) {
												e.preventDefault()
												header.column.getToggleSortingHandler()?.(e)
											}
										}}
										tabIndex={header.column.getCanSort() ? 0 : undefined}
										aria-label={`Sort by ${String(header.column.columnDef.header)}`}
									>
										{flexRender(header.column.columnDef.header, header.getContext())}
										{{
											asc: (
												<ChevronUpIcon
													className="shrink-0 opacity-60"
													size={16}
													aria-hidden="true"
												/>
											),
											desc: (
												<ChevronDownIcon
													className="shrink-0 opacity-60"
													size={16}
													aria-hidden="true"
												/>
											),
										}[header.column.getIsSorted() as string] ?? null}
									</button>
								) : (
									flexRender(header.column.columnDef.header, header.getContext())
								)}
							</TableHead>
						)
					})}
				</TableRow>
			))}
		</TableHeader>
	)
}
