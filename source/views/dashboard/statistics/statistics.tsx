import { useState } from "react"
import { CardTitle } from "@ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs"
import { ApartmentsRevenueChart } from "./apartments-chart"
import { ApartmentsRevenueTable } from "./apartments-table"
import { ApartmentsTrendChart } from "./apartments-trend"
import { ApartmentDashboard } from "./apartment-dashboard"
import { ApartmentStatsOverview } from "./apartment-stats"

export default function Statistics() {
	return (
		<div className="space-y-6 p-4 size-full mx-auto">
			<CardTitle className="text-2xl font-bold">Statistici</CardTitle>

			<Tabs defaultValue="overview">
				<TabsList className="w-full">
					<TabsTrigger value="overview" className="flex-1">
						Prezentare generală
					</TabsTrigger>
					<TabsTrigger value="details" className="flex-1">
						Detalii apartamente
					</TabsTrigger>
					<TabsTrigger value="tables" className="flex-1">
						Tabele venituri
					</TabsTrigger>
					<TabsTrigger value="dashboard" className="flex-1">
						Dashboard apartament
					</TabsTrigger>
				</TabsList>

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
