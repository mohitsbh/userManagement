import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addUser, deleteUser} from "./userSlice";
import {
  Grid,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Pagination,
  Typography,
} from "@mui/material";

const UserManagement: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.users); // Access users from Redux
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"active" | "inactive" | "pending">("active");
  const [region, setRegion] = useState("North");
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleAddUser = () => {
    if (!name || !email) {
      alert("Please provide valid name and email");
      return;
    }
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      status,
      region, // Added region
    };
    dispatch(addUser(newUser));
    setName("");
    setEmail("");
    setStatus("active");
    setRegion("North"); // Reset region after adding user
  };

  const handleDeleteUser = (id: string) => {
    dispatch(deleteUser(id));
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        User Management
      </Typography>

      {/* Search */}
      <TextField
        label="Search by name or email"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ marginBottom: 3 }}
      />

      {/* Add User Form */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value as "active" | "inactive" | "pending")}
              label="Status"
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControl fullWidth>
            <InputLabel>Region</InputLabel>
            <Select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              label="Region"
            >
              <MenuItem value="North">North</MenuItem>
              <MenuItem value="South">South</MenuItem>
              <MenuItem value="East">East</MenuItem>
              <MenuItem value="West">West</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={1} display="flex" alignItems="flex-end">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddUser}
          >
            Add
          </Button>
        </Grid>
      </Grid>

      {/* User Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Region</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      padding: "5px 10px",
                      borderRadius: 1,
                      backgroundColor:
                        user.status === "active"
                          ? "#4caf50"
                          : user.status === "inactive"
                          ? "#f44336"
                          : "#ffc107",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    {user.status}
                  </Box>
                </TableCell>
                <TableCell>{user.region}</TableCell> {/* Display region */}
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_, page) => setCurrentPage(page)}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default UserManagement;
