import { Input } from "@/theme/components/ui/input";
import { Label } from "@/theme/components/ui/label";
const PasswordInput = () => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="password">Password</Label>
    <Input
      id="password"
      type="password"
      placeholder="Enter your password"
      required
    />
  </div>
  )
}

export default PasswordInput;