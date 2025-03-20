import { TabsTrigger, TabsList } from "@ui/tabs"

export function StatisticsTabsList() {
	return (
		<>
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
		</>
	)
}
