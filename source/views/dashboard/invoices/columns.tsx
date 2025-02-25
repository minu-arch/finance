import type { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import { Button } from "@ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

interface Invoice {
  id: string;
  invoiceNumber: string;
  client: string;
  amount: number;
  status: "Paid" | "Pending" | "Overdue";
  dueDate: string;
}

export const invoiceColumns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "invoiceNumber",
    header: "Invoice Number",
  },
  {
    accessorKey: "client",
    header: "Client",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <div
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
          ${
            status === "Paid"
              ? "bg-green-100 text-green-800"
              : status === "Pending"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </div>
      )
    },
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const invoice = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(invoice.id)}>
              Copy invoice ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />
              Edit details
            </DropdownMenuItem>
            <DropdownMenuItem>Change status</DropdownMenuItem>
            <DropdownMenuItem>Update due date</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
