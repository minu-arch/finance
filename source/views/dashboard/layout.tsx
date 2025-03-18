import { ThemeProvider } from "@ui/theme-provider"
import { SidebarProvider, SidebarInset } from "@ui/sidebar"
import Sidebar from "./sidebar/sidebar"
import SidebarControls from "./sidebar/sidebar-controls"
import { Outlet } from "react-router"

export default () => (
	<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
		<SidebarProvider>
			<Sidebar />
			<SidebarInset className="overflow-auto">
				<SidebarControls />
				<Outlet />
			</SidebarInset>
		</SidebarProvider>
	</ThemeProvider>
)
