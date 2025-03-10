import type { ColumnDef } from "@tanstack/react-table"
import type { Expense, ExpenseCategory } from "./expenses.data"
import { format } from "date-fns"
import { ro } from "date-fns/locale"
import ExpenseAction from "./expenses-action"
import { Badge } from "@ui/badge"
import CheckboxCell from "@/views/dashboard/components/cell/checkbox"
import HeaderCheckbox from "@/views/dashboard/components/header/header-checkbox"
import { mockData } from "./expenses.data"

export const getCategoryVariant = (
	category: ExpenseCategory,
): "default" | "secondary" | "destructive" | "outline" => {
	switch (category) {
		case "utilities":
			return "default"
		case "maintenance":
			return "secondary"
		case "repairs":
			return "destructive"
		case "cleaning":
			return "outline"
		default:
			return "default"
	}
}

export const getCategoryLabel = (category: ExpenseCategory): string => {
	switch (category) {
		case "utilities":
			return "Utilități"
		case "maintenance":
			return "Întreținere"
		case "repairs":
			return "Reparații"
		case "cleaning":
			return "Curățenie"
		default:
			return "Altele"
	}
}

export const columns: ColumnDef<Expense>[] = [
	{
		id: "select",
		header: HeaderCheckbox,
		cell: CheckboxCell,
		enableSorting: false,
		size: 28,
	},
	{
		header: "Apartament",
		accessorKey: "apartmentId",
		cell: ({ row }) => (
			<div className="font-medium">Apartament {row.getValue("apartmentId")}</div>
		),
	},
	{
		header: "Data",
		accessorKey: "date",
		cell: ({ row }) => {
			const date = row.getValue("date") as string
			return format(new Date(date), "dd MMMM yyyy", { locale: ro })
		},
	},
	{
		header: "Categorie",
		accessorKey: "category",
		cell: ({ row }) => {
			const category = row.getValue("category") as ExpenseCategory
			return (
				<Badge variant={getCategoryVariant(category)}>
					{getCategoryLabel(category)}
				</Badge>
			)
		},
	},
	{
		header: "Descriere",
		accessorKey: "description",
	},
	{
		header: "Sumă",
		accessorKey: "amount",
		cell: ({ row }) => {
			const amount = row.getValue("amount") as number
			return new Intl.NumberFormat("ro-RO", {
				style: "currency",
				currency: "RON",
			}).format(amount)
		},
	},
	{
		id: "actions",
		cell: ({ row }) => <ExpenseAction row={row} expenses={mockData} />,
		size: 60,
	},
]
