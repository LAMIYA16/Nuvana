import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

export default function JoinCommunity() {
  return (
    <Box
      sx={{
        width: '100%',
        py: 10,
        px: 2,
        background: 'linear-gradient(to right, #f97316, #ec4899)',
        color: 'white',
        textAlign: 'center',
        borderRadius: 0, // remove any border radius
        m: 0, // remove margin
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Join the Nuvana Community Today
      </Typography>

      <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
        Whether you’re a survivor seeking support, someone wanting to help, or an organization offering resources – there's a place for you in our community.
      </Typography>

      <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} justifyContent="center">
        <Button
          variant="contained"
          sx={{
            bgcolor: 'white',
            color: '#333',
            px: 3,
            '&:hover': { bgcolor: '#f0f0f0' },
          }}
        >
          Create Your Profile
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: 'white',
            color: 'white',
            px: 3,
            '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
          }}
        >
          Explore Resources
        </Button>
      </Stack>
    </Box>
  );
}
