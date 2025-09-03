import React from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";

type Props = {
  children: React.ReactNode;
};

export default function AdminRoute({children }: Props) {
  const { data, loading, error } = useQuery(GET_ME, { errorPolicy: "all" });
  
  if (loading) {
    return <p>Loading...</p>;
  }
  
  if (error) {
    return <Navigate to="/login" replace />;
  }
  
  const user = data?.getMe;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "ADMIN") {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;

}
