import { Button } from "@/theme/components/ui/button"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router"

const LoginButtons = () => {
	const navigate = useNavigate()
	const handleContinue = () => {
		console.log("Continue")
		navigate("/apartment/")
	}
	return (
		<div className="flex flex-col gap-2">
			<Button type="submit" className="mt-2 w-full" onClick={handleContinue}>
				Sign in
			</Button>
			<Button variant="outline" className="w-full">
				<FcGoogle className="mr-2 size-5" />
				Sign up with Google
			</Button>
		</div>
	)
}

export default LoginButtons
