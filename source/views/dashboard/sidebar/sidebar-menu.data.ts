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
	title: "Playground",
	url: "#",
	icon: SquareTerminal,
	isActive: true,
	hasAlert: true,
	alertCount: 2,
	items: [
		{
			title: "Acasǎ",
			url: "/dashboard",
			icon: House,
		},
		{
			title: "Statistici",
			url: "/dashboard/statistics",
			icon: ChartNetwork,
		},
		{
			title: "Apartamente",
			url: "/dashboard/apartments",
			icon: Building2,
		},
		{
			title: "Facturi",
			url: "/dashboard/invoices",
			icon: Receipt,
			hasAlert: true,
			alertCount: 3,
		},
		{
			title: "Cheltuieli",
			icon: HandCoins,
			url: "/dashboard/expenses",
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
			url: "/dashboard/todolist",
		},
	],
}
