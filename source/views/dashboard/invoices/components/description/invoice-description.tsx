import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import { GridLayout } from "@/views/dashboard/components/grid-layout"

export default function InvoiceDescription() {
	return (
		<GridLayout columns={4} stretch className="my-2 gap-2">
			<Card>
				<CardHeader>
					<CardTitle className="text-sm font-medium">Facturi Platite</CardTitle>
				</CardHeader>
				<CardContent className="mb-2">
					<div className="text-2xl font-bold">50 Ron</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle className="text-sm font-medium">Facturi Neplătite</CardTitle>
				</CardHeader>
				<CardContent className="mb-2">
					<div className="text-2xl font-bold"> 100 Ron</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle className="text-sm font-medium">Facturi Parțial Plătite</CardTitle>
				</CardHeader>
				<CardContent className="mb-2">
					<div className="text-2xl font-bold"> 150 </div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle className="text-sm font-medium">Total Facturi</CardTitle>
				</CardHeader>
				<CardContent className="mb-2">
					<div className="text-2xl font-bold"> 1000 RON</div>
				</CardContent>
			</Card>
		</GridLayout>
	)
}
