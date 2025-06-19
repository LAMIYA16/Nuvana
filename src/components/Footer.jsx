import React from 'react';
import { Box, Grid, Typography, Link, Container } from '@mui/material';

const footerLinks = {
  Community: ['Survivor Profiles', 'Support Forum', 'Success Stories', 'Letters of Hope'],
  Resources: ['Resource Map', 'Legal Aid', 'Job Board', 'Skill Building'],
  Support: ['Donate', 'Volunteer', 'Contact Us', 'Privacy Policy'],
};

export default function Footer() {
  return (
    // OUTER full-width box with black background
    <Box sx={{ width: '100%', bgcolor: '#0e1621', color: '#ccc', py: 6 }}>
      {/* INNER content container */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo + about */}
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" alignItems="center" mb={2}>
              <img
                src="/logo.png"
                alt="Nuvana Logo"
                style={{ width: 36, height: 36, marginRight: 10 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff' }}>
                Nuvana
              </Typography>
            </Box>
            <Typography variant="subtitle2" sx={{ color: '#aaa' }}>
              न्यूवाना - A New Dawn
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: '#aaa' }}>
              Empowering acid attack survivors across India with resources, support, and community.
            </Typography>
          </Grid>

          {/* Other links */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <Grid item xs={12} sm={6} md={3} key={title}>
              <Box sx={{ width: '100%' }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, color: '#f0f0f0', mb: 1 }}
                >
                  {title}
                </Typography>
                {items.map((item) => (
                  <Link
                    href="#"
                    underline="none"
                    key={item}
                    sx={{
                      display: 'block',
                      color: '#bbb',
                      fontSize: '0.9rem',
                      mb: 0.5,
                      '&:hover': { color: '#fff' },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Footer bottom text */}
        <Box textAlign="center" mt={5} fontSize="0.85rem" color="#999">
          © 2024 Nuvana. Made with ❤️ for survivors, by the community.
        </Box>
      </Container>
    </Box>
  );
}
