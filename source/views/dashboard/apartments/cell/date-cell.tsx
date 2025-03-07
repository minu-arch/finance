import { format } from "date-fns"
import { ro } from "date-fns/locale"
import { Calendar } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@ui/tooltip"
import type { Row } from "@tanstack/react-table"
import type { Apartment } from "../data"

interface DateCellProps {
	row: Row<Apartment>
	dateKey: "checkIn" | "checkOut"
}

export default function DateCell({ row, dateKey }: DateCellProps) {
	const date = row.getValue(dateKey) as string | null
	const isCheckIn = dateKey === "checkIn"

	// Aici vei putea adăuga logica pentru sincronizarea cu Booking.com
	const bookingStatus = row.original.bookingStatus // va veni de la API

	if (!date) return "-"

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger className="flex items-center gap-2">
					<Calendar className="size-4 text-muted-foreground" />
					<span>{format(new Date(date), "dd/MM/yyyy", { locale: ro })}</span>
				</TooltipTrigger>
				<TooltipContent>
					<div className="flex flex-col gap-1">
						<p className="text-sm font-medium">
							{isCheckIn ? "Check In" : "Check Out"}
						</p>
						<p className="text-xs text-muted-foreground">
							{format(new Date(date), "EEEE, d MMMM yyyy", { locale: ro })}
						</p>
						{bookingStatus && (
							<p className="text-xs text-muted-foreground">
								Booking.com ID: {bookingStatus}
							</p>
						)}
					</div>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
