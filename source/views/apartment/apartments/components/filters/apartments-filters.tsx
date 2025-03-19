import type { Table } from "@tanstack/react-table"
import type { Apartment } from "@/views/apartment/apartments/data"
import LocationNameFilter from "./components/location-name-filter"
import StatusFilter from "./components/status-filter"
import ToggleColumns from "./components/toggle-columns"
import AddApartmentButton from "./components/addapartment-button"

type ApartmentsFiltersProps = {
	table: Table<Apartment>
	id: string
	inputRef: React.RefObject<HTMLInputElement>
	selectedStatuses: string[]
	handleStatusChange: (checked: boolean, value: string) => void
	uniqueStatusValues: string[]
	statusCounts: Map<string, number>
	handleDeleteRows: () => void
}

export default function ApartmentsFilters({
	table,
	id,
	inputRef,
	selectedStatuses,
	handleStatusChange,
	uniqueStatusValues,
	statusCounts,
	handleDeleteRows,
}: ApartmentsFiltersProps) {
	return (
		<div className="flex flex-wrap justify-between gap-3 items-start">
			<div className="flex flex-wrap items-start flex-1 gap-3">
				{/* Filter by name or Location */}
				<LocationNameFilter table={table} id={id} inputRef={inputRef} />
				{/* Filter by status */}
				<StatusFilter
					table={table}
					id={id}
					inputRef={inputRef}
					selectedStatuses={selectedStatuses}
					handleStatusChange={handleStatusChange}
					uniqueStatusValues={uniqueStatusValues}
					statusCounts={statusCounts}
				/>
				{/* Toggle columns visibility */}
				<ToggleColumns table={table} />
			</div>
			<AddApartmentButton />
		</div>
	)
}
