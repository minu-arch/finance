import { Link, useLocation } from "react-router"
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from "@ui/sidebar"
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@ui/sidebar"
import { menu } from "./sidebar-menu.data"
import { menuMotostyle } from "@/views/motostyle/sidebar-menu.motostyle"
import { useAppContext, APP_OPTIONS } from "./sidebar-header"

export default () => {
	const { selectedOption } = useAppContext()
	const currentMenu = selectedOption === APP_OPTIONS.APARTMENTS ? menu : menuMotostyle
	const location = useLocation()

	// check if the current link is active
	const isActiveLink = (url: string) => {
		// for the home page (apartment), we check if we are on the exact page or on one of its subpages
		// but not in the specific sections (these will have their own active elements)
		if (url === "/apartment") {
			// it is active only if we are on the exact page or if we are not on a known subpage
			return (
				location.pathname === "/apartment" ||
				(location.pathname.startsWith("/apartment") &&
					!currentMenu.items.some(
						(item) =>
							item.url !== "/apartment" && location.pathname.startsWith(item.url),
					))
			)
		}

		// for the other menu items, we check if the current URL starts with the menu item's URL
		return location.pathname.startsWith(url)
	}

	return (
		<SidebarGroup>
			<SidebarGroupLabel>{currentMenu.title}</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{currentMenu.items.map(
						(item: {
							title: string
							url: string
							icon: React.ComponentType
							hasAlert?: boolean
							alertCount?: number
						}) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild isActive={isActiveLink(item.url)}>
									<Link to={item.url}>
										<item.icon />
										<span>{item.title}</span>
										{item.hasAlert && (
											<span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
												{item.alertCount}
											</span>
										)}
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						),
					)}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	)
}
