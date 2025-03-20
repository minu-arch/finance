import { Outlet } from "react-router"
import Sidebar from "@/views/apartment/sidebar/sidebar"
import { AppContextProvider } from "@/views/apartment/sidebar/sidebar-header"
import { SidebarProvider, SidebarInset } from "@ui/sidebar"
import SidebarControls from "@/views/apartment/sidebar/sidebar-controls"
import { ThemeProvider } from "@ui/theme-provider"

export default function MotostyleLayout() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<AppContextProvider>
				<SidebarProvider>
					<Sidebar />
					<SidebarInset className="overflow-auto">
						<SidebarControls />
						<Outlet />
					</SidebarInset>
				</SidebarProvider>
			</AppContextProvider>
		</ThemeProvider>
	)
}
