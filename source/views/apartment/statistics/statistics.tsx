import { CardTitle } from "@ui/card"
import { Tabs, TabsContent } from "@ui/tabs"
import ApartmentsRevenueChart from "./apartment-details/apartments-chart"
import ApartmentsRevenueTable from "./table/apartments-table"
import ApartmentsTrendChart from "./apartment-details/apartments-trend"
import ApartmentDashboard from "./dashboard/apartment-dashboard"
import { ApartmentStatsOverview } from "./general-stats/apartment-stats"
import { StatisticsTabsList } from "./components/statistics-tabslist"
import { memo } from "react"

export default function Statistics() {
	const MemoizedApartmentStatsOverview = memo(ApartmentStatsOverview)
	const MemoizedApartmentDashboard = memo(ApartmentDashboard)
	const MemoizedApartmentsRevenueChart = memo(ApartmentsRevenueChart)
	const MemoizedApartmentsTrendChart = memo(ApartmentsTrendChart)
	const MemoizedApartmentsRevenueTable = memo(ApartmentsRevenueTable)

	return (
		<div className="space-y-6 p-4 size-full mx-auto">
			<CardTitle className="text-2xl font-bold">Statistici</CardTitle>

			<Tabs defaultValue="overview">
				<StatisticsTabsList />

				<TabsContent value="overview" className="pt-4">
					<MemoizedApartmentStatsOverview />
				</TabsContent>

				<TabsContent value="details" className="space-y-6 pt-4">
					<MemoizedApartmentsRevenueChart />
					<MemoizedApartmentsTrendChart />
				</TabsContent>

				<TabsContent value="tables" className="pt-4">
					<MemoizedApartmentsRevenueTable />
				</TabsContent>

				<TabsContent value="dashboard" className="pt-4">
					<MemoizedApartmentDashboard />
				</TabsContent>
			</Tabs>
		</div>
	)
}
