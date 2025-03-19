interface ExpensesTotalProps {
	total: number
}

export default function ExpensesTotal({ total }: ExpensesTotalProps) {
	return (
		<div className="flex justify-between items-center p-4 bg-muted rounded-lg">
			<span className="font-semibold">Total Cheltuieli</span>
			<span className="text-lg font-bold">
				{new Intl.NumberFormat("ro-RO", {
					style: "currency",
					currency: "RON",
				}).format(total)}
			</span>
		</div>
	)
}
