import { Link, useLocation, useNavigate } from "react-router"
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from "@ui/sidebar"
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@ui/sidebar"
import { menu } from "./sidebar-menu.data"
import { menuMotostyle } from "@/views/motostyle/sidebar-menu.motostyle"
import { useAppContext, APP_OPTIONS } from "./sidebar-header"
import { useSidebarContext } from "./sidebar-context"
import { useEffect } from "react"

export default function SidebarMenuComponent() {
	const { activeMenuItem, setActiveMenuItem } = useSidebarContext()
	const { selectedOption } = useAppContext()
	const navigate = useNavigate()
	const location = useLocation()

	// when the location changes, update the active menu item
	useEffect(() => {
		// extract the current path without query parameters
		const currentPath = location.pathname

		// find the menu item that matches the current path
		// iterate through the menu items and check if the href of the item is part of the current path
		const menuItems =
			selectedOption === APP_OPTIONS.MOTOSTYLE ? menuMotostyle.items : menu.items

		const matchedItem = menuItems.find(
			(item) => currentPath.includes(item.url) && item.url !== "/",
		)

		if (matchedItem) {
			setActiveMenuItem(matchedItem.url)
		} else if (
			(currentPath === "/apartment" && selectedOption === APP_OPTIONS.APARTMENTS) ||
			(currentPath === "/motostyle" && selectedOption === APP_OPTIONS.MOTOSTYLE)
		) {
			// if we are on the home page, activate the "Home" item
			const homeItem = menuItems.find((item) => item.title === "Acasă")
			if (homeItem) {
				setActiveMenuItem(homeItem.url)
			}
		}
	}, [location.pathname, selectedOption, setActiveMenuItem])

	// navigation function
	const handleMenuItemClick = (url: string) => {
		setActiveMenuItem(url)
		navigate(url)
	}

	// choose the menu items based on the selected option
	const menuItems =
		selectedOption === APP_OPTIONS.MOTOSTYLE ? menuMotostyle.items : menu.items

	return (
		<SidebarGroup>
			<SidebarGroupLabel>
				{selectedOption === APP_OPTIONS.MOTOSTYLE ? menuMotostyle.title : menu.title}
			</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{menuItems.map(
						(item: {
							title: string
							url: string
							icon: React.ComponentType
							hasAlert?: boolean
							alertCount?: number
						}) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild isActive={activeMenuItem === item.url}>
									<Link to={item.url} onClick={() => handleMenuItemClick(item.url)}>
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
