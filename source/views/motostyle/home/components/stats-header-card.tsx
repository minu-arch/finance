import { BarChart3, Bike, Package, Wrench } from "lucide-react"
import { GridLayout } from "@/views/apartment/components/grid-layout"
import { Card, CardHeader, CardTitle, CardContent } from "@ui/card"

interface StatCardProps {
	title: string
	value: string
	description: string
	icon: React.ReactNode
}
function StatCard({ title, value, description, icon }: StatCardProps) {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium">{title}</CardTitle>
				{icon}
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">{value}</div>
				<p className="text-xs text-muted-foreground mb-2">{description}</p>
			</CardContent>
		</Card>
	)
}

export default function StatsHeaderCard() {
	return (
		<GridLayout columns={4}>
			<StatCard
				title="Total Motociclete"
				value="128"
				description="12 adăugate luna aceasta"
				icon={<Bike className="size-4 text-muted-foreground" />}
			/>
			<StatCard
				title="Vânzări"
				value="€9,254"
				description="+15.1% față de luna trecută"
				icon={<BarChart3 className="size-4 text-muted-foreground" />}
			/>
			<StatCard
				title="Service Active"
				value="24"
				description="4 finalizate azi"
				icon={<Wrench className="size-4 text-muted-foreground" />}
			/>
			<StatCard
				title="Inventar"
				value="782"
				description="128 produse sub stoc minim"
				icon={<Package className="size-4 text-muted-foreground" />}
			/>
		</GridLayout>
	)
}
