import { Checkbox } from "@ui/checkbox"
import { Link, useNavigate } from "react-router"

const LoginOption = () => {
	const navigate = useNavigate()
	const handleForgotPassword = () => {
		navigate("/auth/forgot-password")
	}
	return (
		<div className="flex justify-between">
			<div className="flex items-center space-x-2">
				<Checkbox id="remember" className="border-muted-foreground" />
				<label
					htmlFor="remember"
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Remember me
				</label>
			</div>
			<Link
				to="/auth/forgot-password"
				className="text-sm font-medium text-primary"
				onClick={handleForgotPassword}
			>
				Forgot password
			</Link>
		</div>
	)
}

export default LoginOption
