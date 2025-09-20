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
      <div className="flex flex-col items-center mb-6">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
          Admin Dashboard
        </h1>
      </div>

      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          maxWidth: 1200,
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
                First Name
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Last Name
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Class
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Roll No
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                School
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                City
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Spark City
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Mobile
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Heard Spark
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
                <TableCell>{index + 1}</TableCell>
                <TableCell>{u.firstName}</TableCell>
                <TableCell>{u.lastName}</TableCell>
                <TableCell>{u.class}</TableCell>
                <TableCell>{u.rollNumber}</TableCell>
                <TableCell>{u.school}</TableCell>
                <TableCell>{u.city}</TableCell>
                <TableCell>{u.sparkCity}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.mobile}</TableCell>
                <TableCell>{u.heardSpark}</TableCell>
                <TableCell>{u.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
