import EmailInput from "./email-input";
import PasswordInput from "./password-input";
import LoginOption from "./login-option";
import LoginButtons from "./login-buttons";

const LoginForm = () => {
  return (
    <div>
    <div className="grid gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <EmailInput />
        <PasswordInput />
      </div>
      <LoginOption />
      <LoginButtons />
    </div>
  </div>
  )
}

export default LoginForm;