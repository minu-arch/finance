import { BarChart3, Bike, Package, Wrench } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface StatCardData {
	id: number
	title: string
	value: string
	description: string
	icon: LucideIcon
}

export const statCardsData = [
	{
		id: 1,
		title: "Total Motociclete",
		value: "128",
		description: "12 adăugate luna aceasta",
		icon: Bike,
	},
	{
		id: 2,
		title: "Vânzări",
		value: "€9,254",
		description: "+15.1% față de luna trecută",
		icon: BarChart3,
	},
	{
		id: 3,
		title: "Service Active",
		value: "24",
		description: "4 finalizate azi",
		icon: Wrench,
	},
	{
		id: 4,
		title: "Inventar",
		value: "782",
		description: "128 produse sub stoc minim",
		icon: Package,
	},
]
