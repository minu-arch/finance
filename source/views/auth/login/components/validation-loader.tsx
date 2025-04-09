import { useEffect } from "react"
import { useNavigate } from "react-router"
import { GridIcon } from "@/components/welcome/svg-icons"

interface ValidationLoaderProps {
	onValidationComplete: () => void
}

export function ValidationLoader({ onValidationComplete }: ValidationLoaderProps) {
	const navigate = useNavigate()

	useEffect(() => {
		const validateUser = async () => {
			try {
				// simulate validation
				await new Promise((resolve) => setTimeout(resolve, 2000))

				// redirect to dashboard
				navigate("/apartment")
				onValidationComplete()
			} catch (error) {
				console.error("Eroare la validare:", error)
				navigate("/auth/login")
			}
		}

		validateUser()
	}, [navigate, onValidationComplete])

	return (
		<div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
			<GridIcon />
			<div className="relative flex flex-col items-center justify-center">
				<div className="h-16 w-16 animate-spin rounded-full border-b-2 border-primary" />
				<p className="mt-4 text-sm text-muted-foreground">
					Se validează autentificarea...
				</p>
			</div>
		</div>
	)
}
