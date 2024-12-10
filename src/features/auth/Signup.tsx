import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../../api/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Link as MuiLink,
  CircularProgress,
} from '@mui/material';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false); // Loader state
  const [error, setError] = useState<string>(''); // To store error messages
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError(''); // Clear previous errors
    setLoading(true); // Set loading state to true
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful! Please login.');
      navigate('/');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message); // Set error message to display in form
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ padding: "80px" }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          backgroundColor: '#fff',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Signup
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && (
            <Typography variant="body2" color="error" sx={{ marginBottom: 2 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            disabled={loading} // Disable button while loading
          >
            {loading ? <CircularProgress size={24} color="secondary" /> : 'Signup'}
          </Button>
        </form>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Already have an account?{' '}
          <MuiLink component={Link} to="/" variant="body2">
            Login here
          </MuiLink>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;
