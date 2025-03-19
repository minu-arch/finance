import {
	SquareTerminal,
	Users2,
	Users,
	Building2,
	DollarSign,
	ListTodo,
	HandCoins,
} from "lucide-react"
import { Receipt, ChartNetwork, House } from "lucide-react"

export type MenuItem = {
	title: string
	url: string
	icon: React.ReactNode
	hasAlert?: boolean
	alertCount?: number
}

export const menu = {
	title: "Apartments",
	url: "#",
	icon: Building2,
	isActive: true,
	hasAlert: true,
	alertCount: 2,
	items: [
		{
			title: "Acasǎ",
			url: "/apartment",
			icon: House,
		},
		{
			title: "Statistici",
			url: "/apartment/statistics",
			icon: ChartNetwork,
		},
		{
			title: "Apartamente",
			url: "/apartment/apartments",
			icon: Building2,
		},
		{
			title: "Facturi",
			url: "/apartment/invoices",
			icon: Receipt,
			hasAlert: true,
			alertCount: 3,
		},
		{
			title: "Cheltuieli",
			icon: HandCoins,
			url: "/apartment/expenses",
		},
		// {
		// 	title: "Contabilitate",
		// 	icon: DollarSign,
		// 	url: "/dashboard/accounting",
		// 	hasAlert: true,
		// 	alertCount: 1,
		// },
		{
			title: "Lista de sarcini",
			icon: ListTodo,
			url: "/apartment/todolist",
		},
	],
}
