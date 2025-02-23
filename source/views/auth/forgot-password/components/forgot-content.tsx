import { AlertDescription, AlertTitle } from "@/theme/components/ui/alert"
import { Alert } from "@/theme/components/ui/alert"
import { CardContent } from "@/theme/components/ui/card"
import { Input } from "@/theme/components/ui/input"
import { Mail } from "lucide-react"
import { Label } from "@/theme/components/ui/label"

type ForgotContentProps = {
  isSubmitted: boolean;
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ForgotContent = ( {isSubmitted, email, setEmail, handleSubmit} : ForgotContentProps ) => {
  return (
    <CardContent>
    {isSubmitted ? (
      <Alert>
        <Mail className="h-4 w-4" />
        <AlertTitle>Check your email</AlertTitle>
        <AlertDescription>We've sent a password reset link to {email}. Please check your inbox.</AlertDescription>
      </Alert>
    ) : (
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
      </form>
    )}
  </CardContent>
  )
}

export default ForgotContent;