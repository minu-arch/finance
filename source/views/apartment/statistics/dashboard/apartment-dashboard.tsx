import { memo, useState } from "react"
import SummaryCards from "./components/summary-cards"
import SelectApartments from "./components/select-apartments"
import TabsContentRevenue from "./components/tabscontent-revenue"
import TabsContentProfit from "./components/tabscontent-profit"
import TabsContentCategories from "./components/tabscontent-categories"
import { CardTitle } from "@ui/card"
import { Tabs, TabsContent, TabsList } from "@ui/tabs"
import TabsListValues from "./components/tabslist-values"

const apartmentData = {
	"Apt 101": [
		{ month: "May", revenue: 186, expenses: 50, profit: 136 },
		{ month: "June", revenue: 305, expenses: 70, profit: 235 },
		{ month: "July", revenue: 237, expenses: 60, profit: 177 },
		{ month: "August", revenue: 173, expenses: 55, profit: 118 },
		{ month: "September", revenue: 209, expenses: 65, profit: 144 },
		{ month: "October", revenue: 214, expenses: 75, profit: 139 },
	],
	"Apt 102": [
		{ month: "May", revenue: 120, expenses: 40, profit: 80 },
		{ month: "June", revenue: 240, expenses: 60, profit: 180 },
		{ month: "July", revenue: 230, expenses: 55, profit: 175 },
		{ month: "August", revenue: 160, expenses: 45, profit: 115 },
		{ month: "September", revenue: 190, expenses: 50, profit: 140 },
		{ month: "October", revenue: 220, expenses: 65, profit: 155 },
	],
	"Apt 103": [
		{ month: "May", revenue: 120, expenses: 40, profit: 80 },
		{ month: "June", revenue: 240, expenses: 60, profit: 180 },
		{ month: "July", revenue: 230, expenses: 55, profit: 175 },
		{ month: "August", revenue: 160, expenses: 45, profit: 115 },
		{ month: "September", revenue: 190, expenses: 50, profit: 140 },
		{ month: "October", revenue: 220, expenses: 65, profit: 155 },
	],
	"Apt 104": [
		{ month: "May", revenue: 120, expenses: 40, profit: 80 },
		{ month: "June", revenue: 240, expenses: 60, profit: 180 },
		{ month: "July", revenue: 230, expenses: 55, profit: 175 },
		{ month: "August", revenue: 160, expenses: 45, profit: 115 },
		{ month: "September", revenue: 190, expenses: 50, profit: 140 },
		{ month: "October", revenue: 220, expenses: 65, profit: 155 },
	],
}

const categorySummary = {
	"Apt 101": [
		{ name: "Chirie", value: 1200 },
		{ name: "Utilități", value: 224 },
		{ name: "Întreținere", value: 150 },
	],
	"Apt 102": [
		{ name: "Chirie", value: 1000 },
		{ name: "Utilități", value: 180 },
		{ name: "Întreținere", value: 120 },
	],
	"Apt 103": [
		{ name: "Chirie", value: 1500 },
		{ name: "Utilități", value: 190 },
		{ name: "Întreținere", value: 180 },
	],
	"Apt 104": [
		{ name: "Chirie", value: 1500 },
		{ name: "Utilități", value: 280 },
		{ name: "Întreținere", value: 320 },
	],
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]

const ApartmentDashboard = memo(function ApartmentDashboard() {
	const [selectedApartment, setSelectedApartment] = useState("Apt 101")

	// calculate the financial summary
	const totalRevenue = apartmentData[
		selectedApartment as keyof typeof apartmentData
	].reduce((sum: number, month: { revenue: number }) => sum + month.revenue, 0)
	const totalExpenses = apartmentData[
		selectedApartment as keyof typeof apartmentData
	].reduce((sum: number, month: { expenses: number }) => sum + month.expenses, 0)
	const totalProfit = totalRevenue - totalExpenses

	return (
		<div className="space-y-4">
			<div className="flex justify-between items-center">
				<CardTitle className="text-xl">Dashboard Apartament</CardTitle>

				<SelectApartments
					selectedApartment={selectedApartment}
					setSelectedApartment={setSelectedApartment}
					apartmentData={
						apartmentData as unknown as Record<
							string,
							{ revenue: number; expenses: number }
						>
					}
				/>
			</div>

			{/* Summary Cards */}
			<SummaryCards
				totalRevenue={totalRevenue}
				totalExpenses={totalExpenses}
				totalProfit={totalProfit}
			/>

			{/* Charts */}
			<Tabs defaultValue="revenue">
				<TabsListValues />

				<TabsContent value="revenue">
					<TabsContentRevenue
						apartmentData={
							apartmentData as unknown as Record<
								string,
								{ revenue: number; expenses: number }
							>
						}
						selectedApartment={selectedApartment}
					/>
				</TabsContent>

				<TabsContent value="profit">
					<TabsContentProfit
						apartmentData={
							apartmentData as unknown as Record<
								string,
								{ revenue: number; expenses: number }
							>
						}
						selectedApartment={selectedApartment}
					/>
				</TabsContent>

				<TabsContent value="categories">
					<TabsContentCategories
						categorySummary={categorySummary}
						selectedApartment={selectedApartment}
						COLORS={COLORS}
					/>
				</TabsContent>
			</Tabs>
		</div>
	)
})

export default ApartmentDashboard
