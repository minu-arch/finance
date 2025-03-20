import { CardTitle } from "@ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs"
import { ApartmentsRevenueChart } from "./apartment-details/apartments-chart"
import { ApartmentsRevenueTable } from "./table/apartments-table"
import { ApartmentsTrendChart } from "./apartment-details/apartments-trend"
import { ApartmentDashboard } from "./dashboard/apartment-dashboard"
import { ApartmentStatsOverview } from "./general-stats/apartment-stats"
import { StatisticsTabsList } from "./components/statistics-tabslist"

export default function Statistics() {
	return (
		<div className="space-y-6 p-4 size-full mx-auto">
			<CardTitle className="text-2xl font-bold">Statistici</CardTitle>

			<Tabs defaultValue="overview">
				<StatisticsTabsList />

				<TabsContent value="overview" className="pt-4">
					<ApartmentStatsOverview />
				</TabsContent>

				<TabsContent value="details" className="space-y-6 pt-4">
					<ApartmentsRevenueChart />
					<ApartmentsTrendChart />
				</TabsContent>

				<TabsContent value="tables" className="pt-4">
					<ApartmentsRevenueTable />
				</TabsContent>

				<TabsContent value="dashboard" className="pt-4">
					<ApartmentDashboard />
				</TabsContent>
			</Tabs>
		</div>
	)
}
