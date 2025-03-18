import { Outlet } from "react-router"
import { ThemeProvider } from "@ui/theme-provider"
import { SidebarProvider } from "@ui/sidebar"
import Sidebar from "../dashboard/sidebar/sidebar-menu"

export default function MotostyleLayout() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<SidebarProvider>
				<div className="h-screen flex">
					<Sidebar />
					<main className="flex-1 overflow-auto p-4">
						<Outlet />
					</main>
				</div>
			</SidebarProvider>
		</ThemeProvider>
	)
}
