import { DropdownMenuItem, DropdownMenuTrigger } from "@ui/dropdown-menu"
import { DropdownMenu, DropdownMenuContent } from "@ui/dropdown-menu"
import { SidebarMenuItem, SidebarMenuButton } from "@ui/sidebar"
import { SidebarMenu, SidebarHeader } from "@ui/sidebar"
import { Check, ChevronDown } from "lucide-react"
import { createContext, useContext, useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router"

// create a context for the selected menu option
type AppContextType = {
	selectedOption: string
	setSelectedOption: (option: string) => void
}

// define the constants for the available options
export const APP_OPTIONS = {
	APARTMENTS: "Apartments",
	MOTOSTYLE: "Motostyle",
} as const

export const AppContext = createContext<AppContextType>({
	selectedOption: APP_OPTIONS.APARTMENTS,
	setSelectedOption: () => {},
})

export const useAppContext = () => useContext(AppContext)

export function AppContextProvider({ children }: { children: React.ReactNode }) {
	const [selectedOption, setSelectedOption] = useState(() => {
		// try to read from localStorage at initialization
		const savedOption = localStorage.getItem("selectedOption")
		// compatibility with previous version - if we find "apartment" in localStorage, we will use "Apartments"
		if (savedOption === "apartment") {
			return APP_OPTIONS.APARTMENTS
		}
		return savedOption || APP_OPTIONS.APARTMENTS
	})

	const location = useLocation()

	// update localStorage every time the option changes
	useEffect(() => {
		localStorage.setItem("selectedOption", selectedOption)
	}, [selectedOption])

	// detect the option automatically based on the URL
	useEffect(() => {
		if (location.pathname.includes("/motostyle")) {
			setSelectedOption(APP_OPTIONS.MOTOSTYLE)
		} else if (location.pathname.includes("/apartment")) {
			setSelectedOption(APP_OPTIONS.APARTMENTS)
		}
	}, [location.pathname])

	return (
		<AppContext.Provider value={{ selectedOption, setSelectedOption }}>
			{children}
		</AppContext.Provider>
	)
}

export default function DropdownHeader() {
	const options = [APP_OPTIONS.APARTMENTS, APP_OPTIONS.MOTOSTYLE]
	const { selectedOption, setSelectedOption } = useAppContext()
	const navigate = useNavigate()

	const handleOptionChange = (option: string) => {
		setSelectedOption(option)
		if (option === APP_OPTIONS.APARTMENTS) {
			navigate("/apartment")
		} else if (option === APP_OPTIONS.MOTOSTYLE) {
			navigate("/apartment/motostyle")
		}
	}

	return (
		<SidebarHeader>
			<SidebarMenu>
				<SidebarMenuItem>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<SidebarMenuButton className="w-full font-muted-foreground">
								{selectedOption}

								<ChevronDown className="ml-auto" />
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className="w-[--radix-dropdown-menu-trigger-width]"
							align="start"
						>
							{options.map((option) => (
								<DropdownMenuItem
									key={option}
									onSelect={() => handleOptionChange(option)}
									className="flex w-full justify-between gap-36 md:gap-28"
								>
									{option}
									{option === selectedOption && <Check className="ml-auto" />}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarHeader>
	)
}
