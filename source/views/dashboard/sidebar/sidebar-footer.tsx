import { SidebarFooter as BaseSidebarFooter } from "@ui/sidebar"
import { Button } from "@ui/button"
import { LogOut } from "lucide-react"
import { Link, useNavigate } from "react-router"

const user = {
	name: "anca",
	email: "anca@example.com",
}

export default function Footer() {
	const navigate = useNavigate()
	const handleLogout = () => {
		navigate("/auth")
	}
	return (
		<BaseSidebarFooter>
			<div className="flex flex-col gap-4 p-4">
				<div className="flex self-center gap-2">
					<div className="grid gap-1">
						<p className="text-lg font-medium leading-none text-center uppercase">
							{user.name}
						</p>
						<p className="text-xs leading-none text-muted-foreground">{user.email}</p>
					</div>
				</div>
				<Button variant="ghost" size="sm">
					<Link to="/auth" onClick={handleLogout} className="flex items-center gap-2">
					<LogOut className="size-4" />
					<span>Log out</span>
					</Link>
				</Button>
			</div>
		</BaseSidebarFooter>
	)
}
