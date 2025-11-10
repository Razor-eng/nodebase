import { RegisterForm } from "@/components/auth/register-form";
import { requireUnAuth } from "@/lib/auth-utils";

const Signup = async () => {
  await requireUnAuth();

  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default Signup;
