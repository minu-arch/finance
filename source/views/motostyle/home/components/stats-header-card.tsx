import { GridLayout } from "@/views/apartment/components/grid-layout"
import { Card, CardHeader, CardTitle, CardContent } from "@ui/card"
import { statCardsData, type StatCardData } from "./statCardsData.data"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
	title: string
	value: string
	description: string
	icon: LucideIcon
}

function StatCard({ title, value, description, icon: Icon }: StatCardProps) {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium">{title}</CardTitle>
				<Icon className="size-4 text-muted-foreground" />
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
			{statCardsData.map((card) => (
				<StatCard
					key={card.id}
					title={card.title}
					value={card.value}
					description={card.description}
					icon={card.icon}
				/>
			))}
		</GridLayout>
	)
}
