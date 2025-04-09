import EmailInput from "./email-input"
import PasswordInput from "./password-input"
import LoginOption from "./login-option"
import LoginButtons from "./login-buttons"

interface LoginFormProps {
	onLoginSuccess: () => void
}

const LoginForm = ({ onLoginSuccess }: LoginFormProps) => {
	return (
		<div>
			<div className="grid gap-4">
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<EmailInput />
					<PasswordInput />
				</div>
				<LoginOption />
				<LoginButtons onLoginSuccess={onLoginSuccess} />
			</div>
		</div>
	)
}

export default LoginForm
