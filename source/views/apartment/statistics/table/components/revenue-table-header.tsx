import { TableHead, TableRow } from "@ui/table"
import { TableHeader } from "@ui/table"

export default function RevenueTableHeader() {
	return (
		<TableHeader>
			<TableRow>
				<TableHead>Apartament</TableHead>
				<TableHead>Mai</TableHead>
				<TableHead>Iunie</TableHead>
				<TableHead>Iulie</TableHead>
				<TableHead>August</TableHead>
				<TableHead>Septembrie</TableHead>
				<TableHead>Octombrie</TableHead>
				<TableHead>Total</TableHead>
			</TableRow>
		</TableHeader>
	)
}
