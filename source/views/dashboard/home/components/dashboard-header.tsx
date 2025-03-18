import { CardTitle, CardHeader, CardDescription } from "@ui/card"

interface DashboardHeaderProps {
	icon: React.ReactNode
	greeting: string
	subGreeting: string
}

export default function DashboardHeader({
	icon,
	greeting,
	subGreeting,
}: DashboardHeaderProps) {
	return (
		<CardHeader className="text-center pb-2">
			<div className="flex items-center justify-center gap-2 mb-2">
				{icon}
				<CardTitle className="text-2xl font-bold">{greeting}, Anca</CardTitle>
			</div>
			<CardDescription className="text-base">{subGreeting}</CardDescription>
		</CardHeader>
	)
}
