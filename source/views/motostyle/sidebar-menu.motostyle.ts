import { Home, Bike, Package, Wrench } from "lucide-react"

export type MenuItem = {
	title: string
	url: string
	icon: React.ReactNode
	hasAlert?: boolean
	alertCount?: number
}

export const menuMotostyle = {
	title: "Motostyle",
	url: "#",
	icon: Bike,
	isActive: true,
	hasAlert: false,
	alertCount: 0,
	items: [
		{
			title: "Acasǎ",
			url: "/motostyle",
			icon: Home,
		},
		{
			title: "Inventar",
			icon: Package,
			url: "/motostyle/inventory",
		},
		{
			title: "Motociclete",
			url: "/motostyle/motorcycles",
			icon: Bike,
		},
		{
			title: "Service",
			url: "/motostyle/service",
			icon: Wrench,
		},
	],
}
