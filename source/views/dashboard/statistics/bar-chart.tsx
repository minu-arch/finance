import { memo } from "react"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@ui/card"
import type { ChartConfig } from "@ui/chart"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@ui/chart"

const chartData = [
	{ month: "May", desktop: 186, mobile: 80 },
	{ month: "June", desktop: 305, mobile: 200 },
	{ month: "July", desktop: 237, mobile: 120 },
	{ month: "August", desktop: 73, mobile: 190 },
	{ month: "September", desktop: 209, mobile: 130 },
	{ month: "October", desktop: 214, mobile: 140 },
]

const chartConfig = {
	desktop: {
		label: "Apt. 101",
		color: "hsl(var(--chart-1))",
	},
	mobile: {
		label: "Apt. 102",
		color: "hsl(var(--chart-2))",
	},
	label: {
		color: "hsl(var(--background))",
	},
} satisfies ChartConfig

export const BarChartComponent = memo(function BarChartComponentInner() {
	return (
		<Card className="max-w-md rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] border-none">
			<CardHeader>
				<CardTitle>Bar Chart - Custom Label</CardTitle>
				<CardDescription>May - August 2025</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart
						accessibilityLayer
						data={chartData}
						layout="vertical"
						margin={{
							right: 16,
						}}
					>
						<CartesianGrid horizontal={false} />
						<YAxis
							dataKey="month"
							type="category"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
							hide
						/>
						<XAxis dataKey="desktop" type="number" hide />
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="line" />}
						/>
						<Bar
							dataKey="desktop"
							layout="vertical"
							fill="var(--color-desktop)"
							radius={4}
						>
							<LabelList
								dataKey="month"
								position="insideLeft"
								offset={8}
								className="fill-foreground"
								fontSize={12}
							/>
							<LabelList
								dataKey="desktop"
								position="right"
								offset={8}
								className="fill-foreground"
								fontSize={12}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="flex gap-2 font-medium leading-none">
					Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
				</div>
				<div className="leading-none text-muted-foreground">
					Showing total visitors for the last 6 months
				</div>
			</CardFooter>
		</Card>
	)
})
