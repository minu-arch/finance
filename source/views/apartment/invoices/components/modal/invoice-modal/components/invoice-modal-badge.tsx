import { Badge } from "@/theme/components/ui/badge"

interface InvoiceModalBadgeProps {
	status: string
	dueDate: string
}

export default function InvoiceModalBadge({ status, dueDate }: InvoiceModalBadgeProps) {
	return (
		<div className="text-right flex flex-col">
			<p>
				<span className="font-semibold">Data Scadenței:</span>{" "}
			</p>
			<p>{dueDate}</p>
			<Badge variant="default" className="self-end">
				{status === "Paid"
					? "Plătită"
					: status === "Pending"
						? "În așteptare"
						: "Restantă"}
			</Badge>
		</div>
	)
}
