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
import { Check } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@ui/command"
import { cn } from "@/theme/lib/utils"
import {
	ButtonGoToPreviousWeek,
	ButtonGoToNextWeek,
	ButtonGoToToday,
	ButtonCurrentWeek,
} from "./components/to-do-list-header-button"

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

	// Începe săptămâna lunea
	const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 })

	// Calculează sfârșitul săptămânii (duminica)
	const endOfCurrentWeek = endOfWeek(startOfCurrentWeek, { weekStartsOn: 1 })

	// Obține numărul săptămânii curente
	const currentWeekNumber = getWeek(currentDate, { weekStartsOn: 1 })

	// Generează lista de săptămâni (1 în trecut și restul anului curent)
	const generateWeekOptions = () => {
		const options = []
		const today = new Date()
		const todayWeekStart = startOfWeek(today, { weekStartsOn: 1 })
		const selectedWeekStart = startOfCurrentWeek

		// Adaugă săptămâna anterioară
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

		// Calculează câte săptămâni mai sunt până la sfârșitul anului
		const yearEnd = endOfYear(today)
		const weeksUntilYearEnd = Math.max(
			1,
			differenceInWeeks(yearEnd, todayWeekStart) + 1,
		)

		// Adaugă săptămâna curentă și toate săptămânile rămase din anul curent
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

	// Efect pentru a face scroll la săptămâna selectată când se deschide popover-ul
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

					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<ButtonCurrentWeek currentWeekNumber={currentWeekNumber} />
						</PopoverTrigger>
						<PopoverContent className="p-0 w-[300px]" align="start">
							<Command>
								<CommandInput placeholder="Caută săptămâna..." />
								<CommandList className="max-h-[300px]">
									<CommandEmpty>Nu s-a găsit nicio săptămână.</CommandEmpty>
									<CommandGroup>
										{weekOptions.map((option) => (
											<CommandItem
												key={option.value}
												value={option.value}
												onSelect={handleSelectWeek}
												ref={option.isSelected ? selectedWeekRef : null}
												className={cn(
													"transition-colors",
													option.isSelected && "font-medium",
												)}
											>
												<div className="flex items-center justify-between w-full">
													<div className="flex flex-col">
														<div className="flex items-center">
															<span>{option.label}</span>
														</div>
														<span className="text-xs text-muted-foreground">
															{option.dateRange}
														</span>
													</div>
													{option.isSelected && (
														<Check className="size-4 text-primary" />
													)}
												</div>
											</CommandItem>
										))}
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>

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
