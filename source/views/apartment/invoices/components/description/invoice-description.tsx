import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import { GridLayout } from "@/views/apartment/components/grid-layout"
import { useState } from "react"

interface InvoiceStat {
	id: string
	title: string
	value: number
}

const invoiceStats: InvoiceStat[] = [
	{ id: "paid", title: "Facturi Platite", value: 50 },
	{ id: "unpaid", title: "Facturi Neplătite", value: 100 },
	{ id: "partiallyPaid", title: "Facturi Parțial Plătite", value: 150 },
	{ id: "total", title: "Total Facturi", value: 200 },
]

function StatInvoiceCard({ stat }: { stat: InvoiceStat }) {
	return (
		<Card className="hover:bg-accent/50 hover:cursor-default border-accent">
			<CardHeader>
				<CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
			</CardHeader>
			<CardContent className="mb-2">
				<div className="text-2xl font-bold">{stat.value} Ron</div>
			</CardContent>
		</Card>
	)
}

export default function InvoiceDescription() {
	// backend data
	const [stats, setStats] = useState<InvoiceStat[]>(invoiceStats)

	// useEffect(() => {
	//   async function fetchStats() {
	//     try {
	//       const response = await fetch('/api/invoice-stats')
	//       const data = await response.json()
	//       setStats(data)
	//     } catch (error) {
	//       console.error('Error fetching invoice stats:', error)
	//     }
	//   }
	//   fetchStats()
	// }, [])

	return (
		<GridLayout columns={4} stretch className="my-2 gap-2">
			{stats.map((stat) => (
				<StatInvoiceCard key={stat.id} stat={stat} />
			))}
		</GridLayout>
	)
}
