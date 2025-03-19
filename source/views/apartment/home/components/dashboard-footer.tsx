import { Button } from "@/theme/components/ui/button"
import { CardFooter } from "@/theme/components/ui/card"

interface DashboardFooterProps {
	handleViewAllTasks: () => void
}

export default function DashboardFooter({ handleViewAllTasks }: DashboardFooterProps) {
	return (
		<CardFooter className="pt-0">
			<Button variant="outline" className="w-full" onClick={handleViewAllTasks}>
				View All Tasks
			</Button>
		</CardFooter>
	)
}
