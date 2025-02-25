export type Invoice = {
  id: string;
  invoiceNumber: string;
  client: string;
  amount: number;
  status: "Paid" | "Pending" | "Overdue";
  dueDate: string;
};

export const mockData: Invoice[] = [
  { id: "1", invoiceNumber: "INV-001", client: "Acme Corp", amount: 1000, status: "Paid", dueDate: "2023-05-15" },
  { id: "2", invoiceNumber: "INV-002", client: "Globex Inc", amount: 1500, status: "Pending", dueDate: "2023-05-20" },
  { id: "3", invoiceNumber: "INV-003", client: "Umbrella LLC", amount: 2000, status: "Overdue", dueDate: "2023-05-10" },
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
]