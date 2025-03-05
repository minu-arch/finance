import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@ui/card"
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@ui/chart"
import type { ValueType } from "recharts/types/component/DefaultTooltipContent"
const chartData = [
	{ browser: "chrome", total: 275, fill: "var(--color-chrome)" },
	{ browser: "safari", total: 200, fill: "var(--color-safari)" },
	{ browser: "firefox", total: 187, fill: "var(--color-firefox)" },
	{ browser: "edge", total: 173, fill: "var(--color-edge)" },
]
const chartConfig = {
	total: {
		label: "Total",
	},
	chrome: {
		label: "Ap.101",
		color: "hsl(var(--chart-1))",
	},
	safari: {
		label: "Ap.102",
		color: "hsl(var(--chart-2))",
	},
	firefox: {
		label: "Ap.103",
		color: "hsl(var(--chart-3))",
	},
	edge: {
		label: "Ap.104",
		color: "hsl(var(--chart-4))",
	},
} satisfies ChartConfig
export default function PieChartComponent() {
	return (
		<Card className="flex flex-col border-none shadow-none">
			<CardHeader className="items-center pb-0 gap-4">
				<CardTitle>Statistici</CardTitle>
				<CardDescription>Statistici pentru toate apartamentele</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
				>
					<PieChart>
						<ChartTooltip
							content={
								<ChartTooltipContent
									nameKey="browser"
									hideLabel
									formatter={(value: ValueType) => `${Number(value)} €`}
								/>
							}
						/>
						<Pie data={chartData} dataKey="total" nameKey="browser">
							<LabelList
								dataKey="browser"
								className="fill-background"
								stroke="none"
								fontSize={12}
								formatter={(value: keyof typeof chartConfig) =>
									chartConfig[value]?.label
								}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm place-self-end">
				<div className="flex items-center gap-2 font-medium leading-none">
					Trending up by 5.2% this month <TrendingUp className="size-4" />
				</div>
				<div className="leading-none text-muted-foreground">
					Showing total visitors for the last 6 months
				</div>
			</CardFooter>
		</Card>
	)
}
