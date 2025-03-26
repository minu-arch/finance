import { useState, useRef, useEffect } from "react"
import {
	format,
	startOfWeek,
	addWeeks,
	subWeeks,
	endOfWeek,
	getWeek,
	isSameDay,
	endOfYear,
	differenceInWeeks,
} from "date-fns"
import { ro } from "date-fns/locale"
import { CardHeader, CardDescription, CardTitle } from "@ui/card"
import {
	ButtonGoToPreviousWeek,
	ButtonGoToNextWeek,
	ButtonGoToToday,
} from "./components/to-do-list-header-button"
import ToDoListFiltersGroup from "./components/to-do-list-filters-group"
interface ToDoListHeaderProps {
	currentDate: Date
	setCurrentDate: (date: Date) => void
}

export default function ToDoListHeader({
	currentDate,
	setCurrentDate,
}: ToDoListHeaderProps) {
	const [open, setOpen] = useState(false)
	const selectedWeekRef = useRef<HTMLDivElement>(null)

	// start of current week
	const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 })

	// end of current week
	const endOfCurrentWeek = endOfWeek(startOfCurrentWeek, { weekStartsOn: 1 })

	// current week number
	const currentWeekNumber = getWeek(currentDate, { weekStartsOn: 1 })

	// generate week options (1 week in the past and the rest of the current year)
	const generateWeekOptions = () => {
		const options = []
		const today = new Date()
		const todayWeekStart = startOfWeek(today, { weekStartsOn: 1 })
		const selectedWeekStart = startOfCurrentWeek

		// add previous week
		const previousWeek = subWeeks(todayWeekStart, 1)
		const previousWeekNumber = getWeek(previousWeek, { weekStartsOn: 1 })
		const previousWeekEnd = endOfWeek(previousWeek, { weekStartsOn: 1 })

		options.push({
			value: format(previousWeek, "yyyy-MM-dd"),
			label: `Săptămâna ${previousWeekNumber}`,
			dateRange: `${format(previousWeek, "d", { locale: ro })} - ${format(previousWeekEnd, "d MMM", { locale: ro })}`,
			isToday: false,
			isSelected: isSameDay(previousWeek, selectedWeekStart),
		})

		// calculate how many weeks are left until the end of the year
		const yearEnd = endOfYear(today)
		const weeksUntilYearEnd = Math.max(
			1,
			differenceInWeeks(yearEnd, todayWeekStart) + 1,
		)

		// add current week and all the weeks remaining in the current year
		for (let i = 0; i <= weeksUntilYearEnd; i++) {
			const weekDate = addWeeks(todayWeekStart, i)
			const weekNumber = getWeek(weekDate, { weekStartsOn: 1 })

			const weekEnd = endOfWeek(weekDate, { weekStartsOn: 1 })

			const label = `Săptămâna ${weekNumber}`
			const dateRange = `${format(weekDate, "d", { locale: ro })} - ${format(weekEnd, "d MMM", { locale: ro })}`

			options.push({
				value: format(weekDate, "yyyy-MM-dd"),
				label,
				dateRange,
				isToday: i === 0,
				isSelected: isSameDay(weekDate, selectedWeekStart),
			})
		}

		return options
	}

	const weekOptions = generateWeekOptions()

	// effect to scroll to the selected week when the popover is opened
	useEffect(() => {
		if (open && selectedWeekRef.current) {
			setTimeout(() => {
				selectedWeekRef.current?.scrollIntoView({
					behavior: "smooth",
					block: "center",
				})
			}, 100)
		}
	}, [open])

	const goToPreviousWeek = () => {
		setCurrentDate(subWeeks(currentDate, 1))
	}

	const goToNextWeek = () => {
		setCurrentDate(addWeeks(currentDate, 1))
	}

	const goToToday = () => {
		setCurrentDate(new Date())
	}

	const handleSelectWeek = (value: string) => {
		const date = new Date(value)
		setCurrentDate(date)
		setOpen(false)
	}

	return (
		<CardHeader className="p-0">
			<div className="flex flex-col justify-between mb-2">
				<CardTitle className="text-2xl font-bold">
					Lista săptămânală de activități
				</CardTitle>
				<div className="flex items-center gap-2 mt-2">
					<ButtonGoToPreviousWeek goToPreviousWeek={goToPreviousWeek} />

					<ToDoListFiltersGroup
						open={open}
						setOpen={setOpen}
						currentWeekNumber={currentWeekNumber}
						weekOptions={weekOptions}
						handleSelectWeek={handleSelectWeek}
						selectedWeekRef={selectedWeekRef as React.RefObject<HTMLDivElement>}
					/>
					<ButtonGoToNextWeek goToNextWeek={goToNextWeek} />

					<ButtonGoToToday goToToday={goToToday} />
				</div>
			</div>
			<CardDescription className="flex items-center justify-between">
				<span>
					Săptămâna {getWeek(startOfCurrentWeek, { weekStartsOn: 1 })} : (
					{format(startOfCurrentWeek, "d MMM", { locale: ro })} -{" "}
					{format(endOfCurrentWeek, "d MMM", { locale: ro })})
				</span>
			</CardDescription>
		</CardHeader>
	)
}
