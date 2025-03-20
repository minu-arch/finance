import { TabsList, TabsTrigger } from "@ui/tabs"

export default function TabsListValues() {
	return (
		<TabsList className="w-full">
			<TabsTrigger value="revenue" className="flex-1">
				Venituri & Cheltuieli
			</TabsTrigger>
			<TabsTrigger value="profit" className="flex-1">
				Profit
			</TabsTrigger>
			<TabsTrigger value="categories" className="flex-1">
				Categorii
			</TabsTrigger>
		</TabsList>
	)
}
