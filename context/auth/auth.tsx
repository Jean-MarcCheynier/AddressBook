import React, { PropsWithChildren } from "react";
import useProtectedRoute from "../../app/hooks/useProtectedRoute";
import useUserStore from "../../app/store/user.store";

const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useUserStore((state) => state.jwt);
  useProtectedRoute(user);
  return <>{children}</>;
};

export default Provider;
