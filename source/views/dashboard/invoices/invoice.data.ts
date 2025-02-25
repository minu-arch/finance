export type Invoice = {
	id: string
	invoiceNumber: string
	client: string
	amount: number
	status: "Paid" | "Pending" | "Overdue"
	dueDate: string
}

export const mockData: Invoice[] = [
	{
		id: "1",
		invoiceNumber: "INV-001",
		client: "Acme Corp",
		amount: 1000,
		status: "Paid",
		dueDate: "2023-05-15",
	},
	{
		id: "2",
		invoiceNumber: "INV-002",
		client: "Globex Inc",
		amount: 1500,
		status: "Pending",
		dueDate: "2023-05-20",
	},
	{
		id: "3",
		invoiceNumber: "INV-003",
		client: "Umbrella LLC",
		amount: 2000,
		status: "Overdue",
		dueDate: "2023-05-10",
	},
	{
		id: "4",
		invoiceNumber: "INV-004",
		client: "Stark Industries",
		amount: 3000,
		status: "Paid",
		dueDate: "2023-05-25",
	},
	{
		id: "5",
		invoiceNumber: "INV-005",
		client: "Wayne Enterprises",
		amount: 2500,
		status: "Pending",
		dueDate: "2023-05-30",
	},
	{
		id: "6",
		invoiceNumber: "INV-006",
		client: "Lexcorp",
		amount: 3500,
		status: "Overdue",
		dueDate: "2023-06-05",
	},
	{
		id: "7",
		invoiceNumber: "INV-007",
		client: "Pym Technologies",
		amount: 4000,
		status: "Paid",
		dueDate: "2023-06-10",
	},
	{
		id: "8",
		invoiceNumber: "INV-008",
		client: "Stark Industries",
		amount: 4500,
		status: "Pending",
		dueDate: "2023-06-15",
	},
	{
		id: "9",
		invoiceNumber: "INV-009",
		client: "Lexcorp",
		amount: 5000,
		status: "Overdue",
		dueDate: "2023-06-20",
	},
	{
		id: "10",
		invoiceNumber: "INV-010",
		client: "Pym Technologies",
		amount: 5500,
		status: "Paid",
		dueDate: "2023-06-25",
	},
	{
		id: "11",
		invoiceNumber: "INV-011",
		client: "Wayne Enterprises",
		amount: 6000,
		status: "Pending",
		dueDate: "2023-06-30",
	},
]
