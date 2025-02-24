import { Checkbox } from "@/theme/components/ui/checkbox";
import type { Row } from "@tanstack/react-table";
import type { Apartament } from "../data";

export default function CheckboxCell({ row }: { row: Row<Apartament> }) {
  return (
    <Checkbox
      checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
    />
  );
}
