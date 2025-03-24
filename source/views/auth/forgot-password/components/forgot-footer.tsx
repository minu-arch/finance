import { Button } from "@ui/button"
import { CardFooter } from "@ui/card"

type ForgotFooterProps = {
	isSubmitted: boolean
	handleSubmit: (e: React.FormEvent) => void
}

const ForgotFooter = ({ isSubmitted, handleSubmit }: ForgotFooterProps) => {
	return (
		<CardFooter>
			{!isSubmitted && (
				<Button
					className="w-full hover:cursor-pointer"
					type="submit"
					onClick={handleSubmit}
				>
					Send Reset Link
				</Button>
			)}
		</CardFooter>
	)
}

export default ForgotFooter
