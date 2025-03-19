import type { Table } from "@tanstack/react-table"

type PageNumberInformationProps<T> = {
	table: Table<T>
}

export default function PageNumberInformation<T>({
	table,
}: PageNumberInformationProps<T>) {
	return (
		<div className="text-muted-foreground flex grow justify-end text-sm whitespace-nowrap">
			<p className="text-muted-foreground text-sm whitespace-nowrap" aria-live="polite">
				<span className="text-foreground">
					{table.getState().pagination.pageIndex *
						table.getState().pagination.pageSize +
						1}
					-
					{Math.min(
						Math.max(
							table.getState().pagination.pageIndex *
								table.getState().pagination.pageSize +
								table.getState().pagination.pageSize,
							0,
						),
						table.getRowCount(),
					)}
				</span>{" "}
				of <span className="text-foreground">{table.getRowCount().toString()}</span>
			</p>
		</div>
	)
}
