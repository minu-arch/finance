import { Outlet } from "react-router"
import { useEffect } from "react"
import { useAppContext, APP_OPTIONS } from "../apartment/sidebar/sidebar-header"

export default function MotostyleLayout() {
	const { setSelectedOption } = useAppContext()

	// set the selected option to Motostyle
	useEffect(() => {
		setSelectedOption(APP_OPTIONS.MOTOSTYLE)
	}, [setSelectedOption])

	return <Outlet />
}
