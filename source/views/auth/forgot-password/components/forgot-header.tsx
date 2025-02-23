import { CardDescription, CardTitle } from "@ui/card";
import { CardHeader } from "@ui/card";

const ForgotHeader = () => {
  return (
    <CardHeader className="pt-10">
    <CardTitle className="text-2xl font-bold text-center">Forgot Password</CardTitle>
    <CardDescription className="text-center">
      Enter your email address and we'll send you a link to reset your password.
    </CardDescription>
  </CardHeader>
  )
}

export default ForgotHeader;