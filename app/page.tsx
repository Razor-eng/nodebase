"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Home = () => {
  const { data } = authClient.useSession();
  const router = useRouter();

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {JSON.stringify(data)}

      {data && (
        <Button
          onClick={() =>
            authClient.signOut({
              fetchOptions: {
                onSuccess: () => {
                  router.push("/login");
                },
                onError: (ctx) => {
                  toast.error(ctx.error.message);
                },
              },
            })
          }
        >
          Logout
        </Button>
      )}
    </div>
  );
};

export default Home;
