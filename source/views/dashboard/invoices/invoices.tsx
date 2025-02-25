import { Card, CardDescription, CardTitle } from "@ui/card";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ui/table"
import { mockData } from "./invoice.data"
import { invoiceColumns } from "./columns"
import InvoiceDescription from "./components/description/invoice-description";


export default function Invoices() {

const table = useReactTable({
  data: mockData,
  columns: invoiceColumns,
  getCoreRowModel: getCoreRowModel(),
})

return (
  <div className="space-y-4 p-4 size-full mx-auto">
    <Card className="size-full border-none shadow-none">
    <CardTitle className="text-2xl font-bold">Invoices</CardTitle>
    <CardDescription>
      <InvoiceDescription />
    </CardDescription>
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
            <TableCell colSpan={invoiceColumns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>
  </Card>
  </div>
)
}
