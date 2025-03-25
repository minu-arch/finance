import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@ui/select"
import { cn } from "@/theme/lib/utils"
interface ToDoListPrioritySelectProps {
	priority: "high" | "medium" | "low" | undefined
	setPriority: (value: "high" | "medium" | "low") => void
	isInvalid: boolean
	setIsInvalid: (value: boolean) => void
}

export default function ToDoListPrioritySelect({
	priority,
	setPriority,
	isInvalid,
	setIsInvalid,
}: ToDoListPrioritySelectProps) {
	return (
		<div className="flex flex-col gap-1">
			<Select
				required
				value={priority}
				onValueChange={(value) => {
					setPriority(value as "high" | "medium" | "low")
					setIsInvalid(false)
				}}
			>
				<SelectTrigger
					className={cn("w-32", isInvalid && "border-red-500 ring-red-500")}
				>
					<SelectValue
						placeholder="Prioritate"
						className={cn(isInvalid && "text-red-500")}
					/>
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel className="font-bold">Prioritate</SelectLabel>
						<SelectItem value="high" className="text-red-500">
							Înaltă
						</SelectItem>
						<SelectItem value="medium" className="text-orange-500">
							Medie
						</SelectItem>
						<SelectItem value="low" className="text-blue-500">
							Scăzută
						</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			{isInvalid && (
				<span className="text-xs text-red-500">Selectează o prioritate</span>
			)}
		</div>
	)
}
