import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { GET_USERS } from "../graphql/queries";
import { useQuery } from "@apollo/client";

export default function AdminPage() {
  const { data, loading, error } = useQuery(GET_USERS, {
    context: {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>❌ {error.message}</p>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.users.map((u: any) => (
            <TableRow key={u.id}>
              <TableCell>{u.id}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
