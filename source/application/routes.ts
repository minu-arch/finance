import { type RouteConfig, index, layout, route } from "@react-router/dev/routes"

export default [
	// loading page
	index("../views/main.tsx"),
	// testing
	route("contact", "../components/testing/contact-view.tsx"),
	// auth
	route("auth", "../views/auth/layout.tsx", [
		index("../views/auth/login/login.tsx"),
		route("forgot-password", "../views/auth/forgot-password/forgot-password.tsx"),
	]),

	// Apartments
	route("apartment", "../views/apartment/layout.tsx", [
		index("../views/apartment/home/dashboard.tsx"),
		route("invoices", "../views/apartment/invoices/invoices.tsx"),
		route("statistics", "../views/apartment/statistics/statistics.tsx"),
		route("apartments", "../views/apartment/apartments/apartments.tsx"),
		route("owners", "../views/apartment/owners/owners.tsx"),
		route("expenses", "../views/apartment/expenses/expenses.tsx"),
		route("accounting", "../views/apartment/accounting/accounting.tsx"),
		route("todolist", "../views/apartment/todolist/to-do-list.tsx"),
	]),

	// Motostyle
	route("motostyle", "../views/motostyle/layout.tsx", [
		index("../views/motostyle/home/moto-home.tsx"),
		route("inventory", "../views/motostyle/inventory/inventory.tsx"),
		route("motorcycles", "../views/motostyle/motorcycles/motorcycles.tsx"),
		route("service", "../views/motostyle/service/service.tsx"),
	]),
] satisfies RouteConfig
