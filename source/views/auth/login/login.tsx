import { ModeToggle } from "@ui/mode-toggle"
import { MainImg } from "@/components/welcome/svg-icons"
import LoginForm from "@/views/auth/login/components/login-form"
import LoginHeader from "@/views/auth/login/components/login-header"
import LoginFooter from "@/views/auth/login/components/login-footer"

export default function Login() {
	return (
		<section className="py-32">
			<ModeToggle className="hover:bg-transparent absolute top-5 right-5 z-10" />
			<div className="container">
				<div className="grid lg:grid-cols-2">
					<div className="relative overflow-hidden ">
						<div className="mx-auto my-auto flex h-full w-full max-w-md flex-col justify-center gap-4 p-6">
							<LoginHeader />
							<div className="w-full rounded-md bg-background">
								<LoginForm />
							</div>
							<LoginFooter />
						</div>
					</div>

					<MainImg />
				</div>
			</div>
		</section>
	)
}
