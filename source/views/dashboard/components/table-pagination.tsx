import type { Table } from "@tanstack/react-table"
import ResultPage from "@/views/dashboard/components/components/result-page"
import PageNumberInformation from "@/views/dashboard/components/components/page-number-information"
import PageButton from "@/views/dashboard/components/components/page-button"

type TablePaginationProps<T> = {
	table: Table<T>
	id: string
	defaultPageSize?: number[]
}

export default function TablePagination<T>({
	table,
	id,
	defaultPageSize = [5, 10, 20, 50, 100],
}: TablePaginationProps<T>) {
	return (
		<div className="flex items-center justify-between gap-8">
			<ResultPage table={table} id={id} pageSizeOptions={defaultPageSize} />
			<PageNumberInformation table={table} />
			<PageButton table={table} />
		</div>
	)
}
