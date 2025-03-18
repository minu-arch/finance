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

			<Tabs defaultValue="overview ">
				<div className="md:hidden bg-muted rounded-lg">
					<TabsList className="w-full grid grid-cols-2 gap-2 p-1">
						<TabsTrigger value="overview" className="truncate text-xs sm:text-sm">
							Prezentare generală
						</TabsTrigger>
						<TabsTrigger value="details" className="truncate text-xs sm:text-sm">
							Detalii apartamente
						</TabsTrigger>
					</TabsList>
					<TabsList className="w-full grid grid-cols-2 gap-2">
						<TabsTrigger value="tables" className="truncate text-xs sm:text-sm">
							Tabele venituri
						</TabsTrigger>
						<TabsTrigger value="dashboard" className="truncate text-xs sm:text-sm">
							Dashboard apartament
						</TabsTrigger>
					</TabsList>
				</div>

				<div className="hidden md:block">
					<TabsList className="w-full rounded-lg mb-4">
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
				</div>

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
