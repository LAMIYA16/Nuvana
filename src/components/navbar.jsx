import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/login'); 
  };

  const handleJoinCommunity = () => {
    const section = document.getElementById('join-community');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#ffffff',
        color: '#1a1a1a',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          
          <Box display="flex" alignItems="center">
            <img
              src="/nuvana logo.png"
              alt="Nuvana Logo"
              style={{ width: 40, height: 40, marginRight: 10 }}
            />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Nuvana
              </Typography>
              <Typography variant="caption" sx={{ color: 'gray' }}>
                न्यूवाना - A New Dawn
              </Typography>
            </Box>
          </Box>

          
          
          
          <Box display="flex" gap={1}>
            <Button
              variant="outlined"
              onClick={handleSignIn}
              sx={{ textTransform: 'none', borderRadius: 2 }}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              onClick={handleJoinCommunity}
              sx={{
                textTransform: 'none',
                borderRadius: 2,
                background: 'linear-gradient(to right, #fb5607, #ff006e)',
                color: '#fff',
              }}
            >
              Join Community
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
