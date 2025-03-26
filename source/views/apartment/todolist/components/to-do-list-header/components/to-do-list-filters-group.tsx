import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@ui/command"
import { Check } from "lucide-react"
import { cn } from "@/theme/lib/utils"
import { ButtonCurrentWeek } from "./to-do-list-header-button"

interface ToDoListFiltersGroupProps {
	open: boolean
	setOpen: (open: boolean) => void
	currentWeekNumber: number
	weekOptions: {
		value: string
		label: string
		dateRange: string
		isSelected: boolean
	}[]
	handleSelectWeek: (value: string) => void
	selectedWeekRef: React.RefObject<HTMLDivElement>
}
export default function ToDoListFiltersGroup({
	open,
	setOpen,
	currentWeekNumber,
	weekOptions,
	handleSelectWeek,
	selectedWeekRef,
}: ToDoListFiltersGroupProps) {
	return (
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
										{option.isSelected && <Check className="size-4 text-primary" />}
									</div>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
