import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui/select"

interface SelectApartmentsProps {
	selectedApartment: string
	setSelectedApartment: (value: string) => void
	apartmentData: Record<string, { revenue: number; expenses: number }>
}

export default function SelectApartments({
	selectedApartment,
	setSelectedApartment,
	apartmentData,
}: SelectApartmentsProps) {
	return (
		<Select value={selectedApartment} onValueChange={setSelectedApartment}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Selectează apartament" />
			</SelectTrigger>
			<SelectContent>
				{Object.keys(apartmentData).map((apt) => (
					<SelectItem key={apt} value={apt}>
						{apt}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
