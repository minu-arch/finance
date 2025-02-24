import { Badge } from "@ui/badge";
import { Button } from "@ui/button";
import { cn } from "@/theme/lib/utils";
import type { Row } from "@tanstack/react-table";
import type { Apartament } from "@/views/dashboard/apartaments/data";

interface StatusCellProps {
  row: Row<Apartament>;
}

export default function StatusCell({ row }: StatusCellProps) {
  const status = row.getValue("status") as "Liber" | "Ocupat";

  const toggleStatus = async () => {
    // here will be the logic for the status change
    // for now we only log the change
    console.log(`Changing status from ${status} to ${status === "Liber" ? "Ocupat" : "Liber"}`);
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleStatus}
      className="p-0 hover:bg-transparent"
    >
      <Badge
        className={cn(
          "cursor-pointer transition-colors",
          status === "Ocupat" 
            ? "bg-red-600 hover:bg-red-600/60 text-primary-foreground" 
            : "bg-green-600 hover:bg-green-600/60 text-primary-foreground"
        )}
      >
        {status}
      </Badge>
    </Button>
  );
}