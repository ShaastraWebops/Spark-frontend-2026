import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  user: { id: string; role: string } | null;
  children: React.ReactNode;
};

export default function AdminRoute({ user, children }: Props) {
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== "ADMIN") return <Navigate to="/unauthorized" replace />;
  return <>{children}</>;
}
