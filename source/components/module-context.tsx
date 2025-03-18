import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useLocation } from "react-router"

type ModuleType = "apartments" | "motostyle"

interface ModuleContextType {
	activeModule: ModuleType
	setActiveModule: (module: ModuleType) => void
}

const ModuleContext = createContext<ModuleContextType | undefined>(undefined)

export function ModuleProvider({ children }: { children: ReactNode }) {
	const location = useLocation()

	// Determine the initial module based on the URL or localStorage
	const getInitialModule = (): ModuleType => {
		const savedModule = localStorage.getItem("selectedModule") as ModuleType
		const urlModule = location.pathname.includes("/motostyle")
			? "motostyle"
			: "apartments"
		return (savedModule || urlModule) as ModuleType
	}

	const [activeModule, setActiveModule] = useState<ModuleType>(getInitialModule)

	// Save the selected module in localStorage
	useEffect(() => {
		localStorage.setItem("selectedModule", activeModule)
	}, [activeModule])

	return (
		<ModuleContext.Provider value={{ activeModule, setActiveModule }}>
			{children}
		</ModuleContext.Provider>
	)
}

// Hook for accessing the context in any component
export function useModule() {
	const context = useContext(ModuleContext)
	if (context === undefined) {
		throw new Error("useModule must be used within a ModuleProvider")
	}
	return context
}
