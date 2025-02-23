import { CloudIcon } from "@/components/welcome/svg-icons";

const LoginHeader = () => {
  return (
    <div className="relative flex flex-col items-center overflow-hidden pb-6 pt-32">
    <CloudIcon className="mb-5"/>
    <p className="mb-2 text-2xl font-bold text-muted-foreground">Log in to your account</p>
    <p className="text-muted-foreground">
      Welcome back! Please enter your details.
    </p>
  </div>
  )
}

export default LoginHeader;