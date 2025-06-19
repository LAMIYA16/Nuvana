import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Paper,
  Stack,
  Container,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function CommunitySupportSection() {
  return (
    <Box sx={{ background: '#fff0f5', py: 6 }}>
  <Container maxWidth="lg">
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, flexWrap: 'wrap' }}>
      
      {/* Letters of Hope */}
      <Box sx={{ flex: 1, minWidth: 300 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Letters of Hope
        </Typography>
        <Typography sx={{ mb: 3 }}>
          A moderated space where the public can submit encouraging letters,
          poems, and artwork – promoting empathy and collective healing across communities.
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Box sx={{ bgcolor: '#ffe4f3', p: 1.2, borderRadius: 2, display: 'flex', alignItems: 'center' }}>
            <EmailIcon sx={{ color: '#d81b60', fontSize: 32 }} />
          </Box>
          <Box>
            <Typography fontWeight="bold">Share Your Support</Typography>
            <Typography variant="body2" color="text.secondary">
              Send messages of hope and encouragement
            </Typography>
          </Box>
        </Stack>
        <Button variant="contained" sx={{
          background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
          color: 'white',
          px: 3,
          py: 1,
          textTransform: 'none',
        }}>
          Submit a Letter of Hope
        </Button>
      </Box>

      {/* Fundraising & Donations */}
      <Box sx={{ flex: 1, minWidth: 300 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Fundraising & Donations
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Support survivors directly through our secure donation portal.
          Every contribution helps fund medical treatments, legal aid, skill development, and community programs.
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Box sx={{ bgcolor: '#d3f9d8', p: 1.2, borderRadius: 2, display: 'flex', alignItems: 'center' }}>
            <VolunteerActivismIcon sx={{ color: '#2e7d32', fontSize: 32 }} />
          </Box>
          <Box>
            <Typography fontWeight="bold">Make a Difference</Typography>
            <Typography variant="body2" color="text.secondary">
              Contribute to survivor support programs
            </Typography>
          </Box>
        </Stack>
        <Button variant="contained" sx={{
          background: 'linear-gradient(to right, #22c55e, #3b82f6)',
          color: 'white',
          px: 3,
          py: 1,
          textTransform: 'none',
        }}>
          Donate Now
        </Button>
      </Box>

    </Box>
  </Container>
</Box>

  );
}
