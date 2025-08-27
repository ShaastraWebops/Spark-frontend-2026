import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from "@apollo/client";
import App from "./App";
import Login from "./auth/Login";
import Signup from "./auth/fixed-signup-form";
import "./index.css";
import SchedulePage from "./pages/Schedulepages";
import Otp from "./auth/Otp";
import { Toaster } from "react-hot-toast";
import Dashboard from "./auth/Dashboard";
import SetNewPassword from "./auth/SetNewPassword";
import AdminPage from "./pages/Admin";
import AdminRoute from "./route/AdminRoute";
import { GET_ME } from "./graphql/queries";

const endpoint = import.meta.env.VITE_GRAPHQL_ENDPOINT;
const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
  credentials: "include", // 👈 important for cookies
});

function RoutesWithAuth() {
  const { data, error, loading } = useQuery(GET_ME, { errorPolicy: "all" });
  console.log("The error in adminROute", error);

  if (loading) return <p>Loading...</p>;

  const user = data?.getMe || null;

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/otp-verification" element={<Otp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/set-password" element={<SetNewPassword />} />

      <Route
        path="/admin"
        element={
          <AdminRoute user={user}>
            <AdminPage />
          </AdminRoute>
        }
      />

      <Route path="/unauthorized" element={<h1>🚫 Not allowed</h1>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Router>
        <RoutesWithAuth />
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);
