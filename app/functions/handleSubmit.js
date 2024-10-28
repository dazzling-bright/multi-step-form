import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useHandleSubmit = (nextPath) => {
  const router = useRouter();
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      router.push(`/${nextPath}`);
    },
    [nextPath, router]
  ); 

  return handleSubmit;
};

export default useHandleSubmit;
