import { Button } from "@ui/button"
import { ArrowLeft } from "lucide-react"

interface BackButtonProps {
	handleBack: () => void
}

const BackButton = ({ handleBack }: BackButtonProps) => {
	return (
		<Button
			variant="ghost"
			className="absolute inset-y-2 left-4 p-2 hover:cursor-pointer"
			onClick={handleBack}
		>
			<ArrowLeft className="size-4 mr-2" />
			Back
		</Button>
	)
}

export default BackButton
