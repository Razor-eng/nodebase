import { LoginForm } from "@/components/auth/login-form";
import { requireUnAuth } from "@/lib/auth-utils";

const Login = async () => {
  await requireUnAuth();

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
