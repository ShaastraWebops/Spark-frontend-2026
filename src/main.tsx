import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
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

const endpoint = import.meta.env.VITE_GRAPHQL_ENDPOINT;
const client = new ApolloClient({
  uri: endpoint, // Update with your backend URL
  cache: new InMemoryCache(), // Use InMemoryCache for Apollo Client
  credentials: "include", // Include credentials for CORS
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/otp-verification" element={<Otp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/set-password" element={<SetNewPassword />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);
