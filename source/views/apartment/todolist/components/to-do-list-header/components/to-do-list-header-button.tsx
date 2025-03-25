import { Button } from "@ui/button"
import { cn } from "@/theme/lib/utils"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"

interface ButtonGoToNextWeekProps {
	goToNextWeek: () => void
}

interface ButtonGoToTodayProps {
	goToToday: () => void
}

interface ButtonGoToPreviousWeekProps {
	goToPreviousWeek: () => void
}

interface ButtonCurrentWeekProps {
	currentWeekNumber: number
}

export const ButtonGoToNextWeek = ({ goToNextWeek }: ButtonGoToNextWeekProps) => {
	return (
		<Button
			variant="outline"
			size="icon"
			onClick={goToNextWeek}
			aria-label="Săptămâna următoare"
		>
			<ChevronRight className="size-4" />
		</Button>
	)
}

export const ButtonGoToToday = ({ goToToday }: ButtonGoToTodayProps) => {
	return (
		<Button variant="outline" size="sm" onClick={goToToday}>
			Azi
		</Button>
	)
}

export const ButtonGoToPreviousWeek = ({
	goToPreviousWeek,
}: ButtonGoToPreviousWeekProps) => {
	return (
		<Button
			variant="outline"
			size="icon"
			onClick={goToPreviousWeek}
			aria-label="Săptămâna anterioară"
		>
			<ChevronLeft className="size-4" />
		</Button>
	)
}

export const ButtonCurrentWeek = ({ currentWeekNumber }: ButtonCurrentWeekProps) => {
	return (
		<Button
			variant="outline"
			className={cn("justify-center text-left font-normal", "px-3 py-1.5")}
		>
			<Calendar className="mr-2 size-4" />
			<span>Săptămâna {currentWeekNumber}</span>
		</Button>
	)
}
