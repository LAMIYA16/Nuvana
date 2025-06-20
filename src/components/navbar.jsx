import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgb(255, 255, 255)',
        color: ' #1a1a1a',
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

          
          <Box display="flex" alignItems="center" gap={3}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Resources</Button>
            <Button color="inherit">Support</Button>
            <Button color="inherit">About</Button>
          </Box>

         
          <Box display="flex" gap={1}>
            <Button
              variant="outlined"
              sx={{
                textTransform: 'none',
                borderRadius: 2,
              }}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
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
