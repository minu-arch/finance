import { Button } from "@ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover";
import { FilterIcon } from "lucide-react";
import { Checkbox } from "@ui/checkbox";
import { Label } from "@ui/label";


export default function StatusFilter({ selectedStatuses, uniqueStatusValues, handleStatusChange, id, statusCounts }: { selectedStatuses: string[], uniqueStatusValues: string[], handleStatusChange: (checked: boolean, value: string) => void, id: string, statusCounts: Map<string, number> }) {
  return (
    <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">
        <FilterIcon className="-ms-1 opacity-60" size={16} aria-hidden="true" />
        Status
        {selectedStatuses.length > 0 && (
          <span className="bg-background text-muted-foreground/70 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
            {selectedStatuses.length}
          </span>
        )}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto min-w-36 p-3" align="start">
      <div className="space-y-3">
        <div className="text-muted-foreground text-xs font-medium">Filters</div>
        <div className="space-y-3">
          {uniqueStatusValues.map((value, i) => (
            <div key={value} className="flex items-center gap-2">
              <Checkbox
                id={`${id}-${i}`}
                checked={selectedStatuses.includes(value)}
                onCheckedChange={(checked: boolean) => handleStatusChange(checked, value)}
              />
              <Label
                htmlFor={`${id}-${i}`}
                className="flex grow justify-between gap-2 font-normal"
              >
                {value}{" "}
                <span className="text-muted-foreground ms-2 text-xs">
                  {statusCounts.get(value)}
                </span>
              </Label>
            </div>
          ))}
        </div>
      </div>
    </PopoverContent>
  </Popover>
  );
}