import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useRouterLoading = (): {
  /** Is the router loading */
  loading: boolean;
  /** Is there an error */
  error: boolean;
} => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));
    router.events.on("routeChangeError", () => setError(true));
  }, [router]);

  return { loading, error };
};
