import { AlertDescription, AlertTitle } from "@ui/alert"
import { Alert } from "@ui/alert"
import { CardContent } from "@ui/card"
import { Input } from "@ui/input"
import { Mail } from "lucide-react"
import { Label } from "@ui/label"

type ForgotContentProps = {
	isSubmitted: boolean
	email: string
	setEmail: (email: string) => void
	handleSubmit: (e: React.FormEvent) => void
}

const ForgotContent = ({
	isSubmitted,
	email,
	setEmail,
	handleSubmit,
}: ForgotContentProps) => {
	return (
		<CardContent>
			{isSubmitted ? (
				<Alert>
					<Mail className="h-4 w-4" />
					<AlertTitle>Check your email</AlertTitle>
					<AlertDescription>
						We've sent a password reset link to {email}. Please check your inbox.
					</AlertDescription>
				</Alert>
			) : (
				<form onSubmit={handleSubmit}>
					<div className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="Enter your email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
					</div>
				</form>
			)}
		</CardContent>
	)
}

export default ForgotContent
