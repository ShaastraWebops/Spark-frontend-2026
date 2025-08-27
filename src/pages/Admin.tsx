import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { GET_USERS } from "../graphql/queries";
import { useQuery } from "@apollo/client";

export default function AdminPage() {
  const { data, loading, error } = useQuery(GET_USERS, {
    fetchPolicy: "network-only",
  });

  if (loading)
    return (
      <Typography align="center" sx={{ mt: 4 }}>
        Loading users...
      </Typography>
    );
  if (error)
    return (
      <Typography align="center" color="error" sx={{ mt: 4 }}>
        ❌ {error.message}
      </Typography>
    );

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-slate-900">
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: "bold" }}
        className="text-white"
      >
        Admin Dashboard
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          maxWidth: 800,
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        <Table>
          <TableHead
            sx={{ background: "linear-gradient(to right, #3b82f6, #8b5cf6)" }}
          >
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                #
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Role
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.getUsers.map((u: any, index: number) => (
              <TableRow
                key={u.id}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                  },
                }}
              >
                <TableCell>{index + 1}</TableCell> {/* Serial number */}
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
