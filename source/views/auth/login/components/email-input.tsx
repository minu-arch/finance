import { Input } from "@/theme/components/ui/input";
import { Label } from "@/theme/components/ui/label";
const EmailInput = () => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="email">Email</Label>
    <Input
      type="email"
      placeholder="Enter your email"
      required
    />
  </div>
  )
};

export default EmailInput;
