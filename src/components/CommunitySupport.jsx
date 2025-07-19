import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Stack,
  Container,
  Button,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

function CommunitySupportSection() {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: '#fffaf3', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 6, flexWrap: 'wrap' }}>
          
          {/* Letters of Hope */}
          <Box sx={{ flex: 1, minWidth: 300 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Letters of Hope
            </Typography>
            <Typography sx={{ mb: 3 }}>
              A moderated space where the public can submit encouraging letters,<br />
              poems, and artwork – promoting empathy and collective healing across communities.
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Box sx={{ bgcolor: '#ffe8f1', p: 1.2, borderRadius: 2, display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ color: '#ec4899', fontSize: 32 }} />
              </Box>
              <Box>
                <Typography fontWeight="bold">Share Your Support</Typography>
                <Typography variant="body2" color="text.secondary">
                  Send messages of hope and encouragement
                </Typography>
              </Box>
            </Stack>
            <Button
              variant="contained"
              onClick={() => navigate('/LettersOfHope')}
              sx={{
                background: 'linear-gradient(to right, #ec4899, #f97316)',
                color: 'white',
                px: 3,
                py: 1,
                textTransform: 'none',
                borderRadius: '8px',
                boxShadow: 2,
              }}
            >
              Submit a Letter of Hope
            </Button>
          </Box>

          {/* Fundraising & Donations */}
          <Box sx={{ flex: 1, minWidth: 300 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Fundraising & Donations
            </Typography>
            <Typography sx={{ mb: 3 }}>
              Support survivors directly through our secure donation portal.<br />
              Every contribution helps fund medical treatments, legal aid, skill development, and community programs.
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Box sx={{ bgcolor: '#e0fbe0', p: 1.2, borderRadius: 2, display: 'flex', alignItems: 'center' }}>
                <VolunteerActivismIcon sx={{ color: '#16a34a', fontSize: 32 }} />
              </Box>
              <Box>
                <Typography fontWeight="bold">Make a Difference</Typography>
                <Typography variant="body2" color="text.secondary">
                  Contribute to survivor support programs
                </Typography>
              </Box>
            </Stack>
            <Button
              variant="contained"
              onClick={() => navigate('/DonationPage')}
              sx={{
                background: 'linear-gradient(to right, #22c55e, #3b82f6)',
                color: 'white',
                px: 3,
                py: 1,
                textTransform: 'none',
                borderRadius: '8px',
                boxShadow: 2,
              }}
            >
              Donate Now
            </Button>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default CommunitySupportSection;
