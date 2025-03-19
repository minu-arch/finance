import { ThemeProvider } from "@ui/theme-provider"
import { SidebarProvider, SidebarInset } from "@ui/sidebar"
import Sidebar from "./sidebar/sidebar"
import SidebarControls from "./sidebar/sidebar-controls"
import { Outlet } from "react-router"
import { AppContextProvider } from "./sidebar/sidebar-header"

export default () => (
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
