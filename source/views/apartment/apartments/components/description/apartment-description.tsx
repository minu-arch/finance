import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import { GridLayout } from "@/views/apartment/components/grid-layout"

export default function ApartmentDescription() {
	return (
		<GridLayout columns={4} className="my-2 gap-2">
			<Card className="hover:bg-accent/50 hover:cursor-default border-accent">
				<CardHeader>
					<CardTitle className="text-sm font-medium">Total Apartamente</CardTitle>
				</CardHeader>
				<CardContent className="mb-2">
					<div className="text-2xl font-bold">1</div>
				</CardContent>
			</Card>
			<Card className="hover:bg-accent/50 hover:cursor-default border-accent">
				<CardHeader>
					<CardTitle className="text-sm font-medium">Apartamente Ocupate</CardTitle>
				</CardHeader>
				<CardContent className="mb-2">
					<div className="text-2xl font-bold">0</div>
				</CardContent>
			</Card>
			<Card className="hover:bg-accent/50 hover:cursor-default border-accent">
				<CardHeader>
					<CardTitle className="text-sm font-medium">Apartamente Libere</CardTitle>
				</CardHeader>
				<CardContent className="mb-2">
					<div className="text-2xl font-bold"> 1 </div>
				</CardContent>
			</Card>
			<Card className="hover:bg-accent/50 hover:cursor-default border-accent">
				<CardHeader>
					<CardTitle className="text-sm font-medium">Venituri Totale</CardTitle>
				</CardHeader>
				<CardContent className="mb-2">
					<div className="text-2xl font-bold"> 1000 RON</div>
				</CardContent>
			</Card>
		</GridLayout>
	)
}
