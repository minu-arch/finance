import { PopoverTrigger } from "@ui/popover"
import { format } from "date-fns"
import { Calendar } from "@ui/calendar"
import { PopoverContent } from "@ui/popover"
import { Popover } from "@ui/popover"
import { ro } from "date-fns/locale"
import { Button } from "@ui/button"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/theme/lib/utils"
import type { ExpenseFormData } from "../expenses.types"
import { Label } from "@ui/label"

interface ExpensesDataProps {
	formData: ExpenseFormData
	setFormData: React.Dispatch<React.SetStateAction<ExpenseFormData>>
}
export default function ExpensesData({ formData, setFormData }: ExpensesDataProps) {
	return (
		<div className="grid gap-2">
			<Label>Data</Label>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						className={cn(
							"justify-start text-left font-normal",
							!formData.date && "text-muted-foreground",
						)}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{formData.date
							? format(formData.date, "PPP", { locale: ro })
							: "Alege data"}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0">
					<Calendar
						mode="single"
						selected={formData.date}
						onSelect={(date) =>
							setFormData({
								...formData,
								date: date || undefined,
							})
						}
						locale={ro}
					/>
				</PopoverContent>
			</Popover>
		</div>
	)
}
