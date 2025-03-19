import { Button } from "@ui/button"
import { PaginationContent, PaginationItem } from "@ui/pagination"
import type { Table } from "@tanstack/react-table"

import { Pagination } from "@ui/pagination"
import {
	ChevronFirstIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronLastIcon,
} from "lucide-react"

type PageButtonProps<T> = {
	table: Table<T>
}

export default function PageButton<T>({ table }: PageButtonProps<T>) {
	return (
		<div>
			<Pagination>
				<PaginationContent>
					{/* First page button */}
					<PaginationItem>
						<Button
							size="icon"
							variant="outline"
							className="disabled:pointer-events-none disabled:opacity-50"
							onClick={() => table.firstPage()}
							disabled={!table.getCanPreviousPage()}
							aria-label="Go to first page"
						>
							<ChevronFirstIcon size={16} aria-hidden="true" />
						</Button>
					</PaginationItem>
					{/* Previous page button */}
					<PaginationItem>
						<Button
							size="icon"
							variant="outline"
							className="disabled:pointer-events-none disabled:opacity-50"
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
							aria-label="Go to previous page"
						>
							<ChevronLeftIcon size={16} aria-hidden="true" />
						</Button>
					</PaginationItem>
					{/* Next page button */}
					<PaginationItem>
						<Button
							size="icon"
							variant="outline"
							className="disabled:pointer-events-none disabled:opacity-50"
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
							aria-label="Go to next page"
						>
							<ChevronRightIcon size={16} aria-hidden="true" />
						</Button>
					</PaginationItem>
					{/* Last page button */}
					<PaginationItem>
						<Button
							size="icon"
							variant="outline"
							className="disabled:pointer-events-none disabled:opacity-50"
							onClick={() => table.lastPage()}
							disabled={!table.getCanNextPage()}
							aria-label="Go to last page"
						>
							<ChevronLastIcon size={16} aria-hidden="true" />
						</Button>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	)
}
