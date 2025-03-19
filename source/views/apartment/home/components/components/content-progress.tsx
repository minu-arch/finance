import { Progress } from "@/theme/components/ui/progress"

interface ContentProgressProps {
	completedTasks: number
	totalTasks: number
	progressPercentage: number
}

export default function ContentProgress({
	completedTasks,
	totalTasks,
	progressPercentage,
}: ContentProgressProps) {
	return (
		<div className="mb-4">
			<div className="flex justify-between text-sm mb-1">
				<span>Progress</span>
				<span>
					{completedTasks}/{totalTasks} completed
				</span>
			</div>
			<Progress value={progressPercentage} className="h-2" />
		</div>
	)
}
