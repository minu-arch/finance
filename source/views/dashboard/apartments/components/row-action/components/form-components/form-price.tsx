import { Input } from "@ui/input";
import { Label } from "@ui/label";
import type { Apartment } from "@/views/dashboard/apartments/data";

export default function FormPrice({ formData, setFormData }: { formData: Apartment, setFormData: (formData: Apartment) => void }) {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="price" className="text-right">
        Price
      </Label>
      <Input
        id="price"
        type="number"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
        className="col-span-3"
      />
    </div>
  )
}