import { type RouteConfig, index, layout, route } from "@react-router/dev/routes"

export default [
	// loading page
	index("../views/main.tsx"),

	// auth
	route("auth", "../views/auth/layout.tsx", [
		index("../views/auth/login/login.tsx"),
		route("forgot-password", "../views/auth/forgot-password/forgot-password.tsx"),
		// route("register", "../views/auth/register.tsx"),
	]),

	// Dashboard
	route("dashboard", "../views/dashboard/layout.tsx", [
		index("../views/dashboard/dashboard.tsx"),
		route("invoices", "../views/dashboard/invoices/invoices.tsx"),
		route("statistics", "../views/dashboard/statistics/statistics.tsx"),
		route("apartments", "../views/dashboard/apartments/apartments.tsx"),
		route("owners", "../views/dashboard/owners/owners.tsx"),
		route("expenses", "../views/dashboard/expenses/expenses.tsx"),
		route("accounting", "../views/dashboard/accounting/accounting.tsx"),
		route("todolist", "../views/dashboard/todolist/to-do-list.tsx"),
	]),
] satisfies RouteConfig
