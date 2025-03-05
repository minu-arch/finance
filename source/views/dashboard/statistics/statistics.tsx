import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/theme/components/ui/card"
import { GridLayout } from "../components/grid-layout"
import { ChartBarIncreasing, FileText, Tag, ListOrdered } from "lucide-react"
import PieChartComponent from "./pie-chart"
export default function Statistics() {
	return (
		<div className="space-y-4 p-4 size-full mx-auto">
			<CardTitle className="text-2xl font-bold">Statistici</CardTitle>
			<div className="flex md:flex-row flex-col gap-4 w-full ">
				<div className="w-full flex-1 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] p-4">
					<div className="flex justify-between flex-col size-full">
						<div className="flex flex-col gap-4">
							<h2 className="text-lg font-bold">Statistici</h2>
							<p className="text-sm text-muted-foreground mb-2">
								Statistici pentru toate apartamentele
							</p>
						</div>
						<GridLayout columns={4} className="gap-2">
							<Card className="bg-red-200 md:max-w-xs overflow-hidden">
								<CardHeader>
									<div className="flex flex-col items-start gap-2">
										<div className="rounded-full bg-red-400 p-2 ">
											<ChartBarIncreasing className="size-4" />
										</div>
										<CardTitle className="text-sm line-clamp-1 dark:text-black">
											Total Venituri
										</CardTitle>
									</div>
								</CardHeader>
								<CardContent className="py-6">
									<div className="flex flex-col gap-4">
										<div className="flex flex-col gap-2">
											<p className="text-sm line-clamp-1 dark:text-black">
												Total Venituri
											</p>
										</div>
									</div>
								</CardContent>
								<CardFooter>
									<p className="text-xs line-clamp-1 dark:text-black">Total Venituri</p>
								</CardFooter>
							</Card>
							<Card className="bg-orange-100 md:max-w-xs overflow-hidden">
								<CardHeader>
									<div className="flex flex-col items-start gap-2">
										<div className="rounded-full bg-orange-300 p-2">
											<ListOrdered className="size-4" />
										</div>
										<CardTitle className="text-sm line-clamp-2 dark:text-black">
											Total Apart.
										</CardTitle>
									</div>
								</CardHeader>
								<CardContent className="py-6">
									<div className="flex flex-col gap-4">
										<div className="flex flex-col gap-2">
											<p className="text-sm line-clamp-1 dark:text-black">
												Total Inchirieri
											</p>
										</div>
									</div>
								</CardContent>
								<CardFooter>
									<p className="text-xs line-clamp-1 dark:text-black">
										Total Inchirieri
									</p>
								</CardFooter>
							</Card>
							<Card className="bg-green-100 md:max-w-xs overflow-hidden">
								<CardHeader>
									<div className="flex flex-col items-start gap-2">
										<div className="rounded-full bg-green-300 p-2">
											<Tag className="size-4" />
										</div>
										<CardTitle className="text-sm line-clamp-1 dark:text-black">
											Total Închirieri
										</CardTitle>
									</div>
								</CardHeader>
								<CardContent className="py-6">
									<div className="flex flex-col gap-4">
										<div className="flex flex-col gap-2">
											<p className="text-sm line-clamp-1 dark:text-black">
												Total Summaries
											</p>
										</div>
									</div>
								</CardContent>
								<CardFooter>
									<p className="text-xs line-clamp-1 dark:text-black">
										Total Summaries
									</p>
								</CardFooter>
							</Card>
							<Card className="bg-violet-100 md:max-w-xs overflow-hidden">
								<CardHeader>
									<div className="flex flex-col items-start gap-2">
										<div className="rounded-full bg-violet-300 p-2">
											<FileText className="size-4" />
										</div>
										<CardTitle className="text-sm line-clamp-1 dark:text-black">
											Total Cheltuieli
										</CardTitle>
									</div>
								</CardHeader>
								<CardContent className="py-6">
									<div className="flex flex-col gap-4">
										<div className="flex flex-col gap-2">
											<p className="text-sm line-clamp-1 dark:text-black">
												Total Summaries
											</p>
										</div>
									</div>
								</CardContent>
								<CardFooter>
									<p className="text-xs line-clamp-1 dark:text-black">
										Total Cheltuieli
									</p>
								</CardFooter>
							</Card>
						</GridLayout>
					</div>
				</div>
				<div className="rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]">
					<PieChartComponent />
				</div>
			</div>
		</div>
	)
}
