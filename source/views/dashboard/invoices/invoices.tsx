import { CardTitle } from "@/theme/components/ui/card";
import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { MoreHorizontal, Pencil } from "lucide-react"

import { Button } from "@ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ui/table"

// Define the structure of our invoice data
interface Invoice {
  id: string
  invoiceNumber: string
  client: string
  amount: number
  status: "Paid" | "Pending" | "Overdue"
  dueDate: string
}

const invoices: Invoice[] = [
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

export default function Invoices() {
 // Define our columns
 const columns: ColumnDef<Invoice>[] = [
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

const table = useReactTable({
  data: invoices,
  columns,
  getCoreRowModel: getCoreRowModel(),
})

return (
  <div className="rounded-md border">
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>
)
}
