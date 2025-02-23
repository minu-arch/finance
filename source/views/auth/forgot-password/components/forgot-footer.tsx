import { Button } from "@/theme/components/ui/button";
import { CardFooter } from "@/theme/components/ui/card";

type ForgotFooterProps = {
  isSubmitted: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const ForgotFooter = ( {isSubmitted, handleSubmit} : ForgotFooterProps ) => {
  return (
    <CardFooter>
    {!isSubmitted && (
      <Button className="w-full" type="submit" onClick={handleSubmit}>
        Send Reset Link
      </Button>
    )}
  </CardFooter>
  )
}

export default ForgotFooter;