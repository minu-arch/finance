import { Button } from "@ui/button"
import { FcGoogle } from "react-icons/fc"

interface LoginButtonsProps {
	onLoginSuccess: () => void
}

const LoginButtons = ({ onLoginSuccess }: LoginButtonsProps) => {
	const handleContinue = () => {
		console.log("Continue")
		onLoginSuccess()
	}
	return (
		<div className="flex flex-col gap-2">
			<Button
				type="submit"
				className="mt-2 w-full hover:cursor-pointer"
				onClick={handleContinue}
			>
				Sign in
			</Button>
			{/* <Button variant="outline" className="w-full hover:cursor-pointer">
				<FcGoogle className="mr-2 size-5" />
				Sign up with Google
			</Button> */}
		</div>
	)
}

export default LoginButtons
