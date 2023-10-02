import React, { PropsWithChildren } from "react";
import useProtectedRoute from "../../hooks/useProtectedRoute";
import useUserStore from "../../features/auth/auth.store";

const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const jwt = useUserStore((state) => state.jwt);
  useProtectedRoute(jwt);
  return <>{children}</>;
};

export default Provider;
