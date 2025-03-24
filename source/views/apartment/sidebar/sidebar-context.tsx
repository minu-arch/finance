import { createContext, useContext, useState } from "react"

type SidebarContextType = {
	activeMenuItem: string | null
	setActiveMenuItem: (item: string | null) => void
}

export const SidebarContext = createContext<SidebarContextType>({
	activeMenuItem: null,
	setActiveMenuItem: () => {},
})

export const useSidebarContext = () => useContext(SidebarContext)

export function SidebarContextProvider({ children }: { children: React.ReactNode }) {
	const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null)

	return (
		<SidebarContext.Provider value={{ activeMenuItem, setActiveMenuItem }}>
			{children}
		</SidebarContext.Provider>
	)
}
