import React, { PropsWithChildren } from "react";

import useProtectedRoute from "../../hooks/useProtectedRoute";

const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  useProtectedRoute();
  return <>{children}</>;
};

export default Provider;
