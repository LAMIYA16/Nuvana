import React from "react";
import { Box, Typography, Button, Grid } from '@mui/material';

export default function Hero() {
  return (
    <Box
  sx={{
    textAlign: 'center',
    py: 8,
    px: 2,
    backgroundImage: 'linear-gradient(to bottom,rgb(216, 169, 179), #ffffff)', 
    backgroundSize: 'cover',
  }}
>

      <Box
        sx={{
          display: "inline-block",
          paddingX: 2,
          paddingY: 0.1,
          backgroundColor: "rgb(251, 243, 245)",
          borderRadius: "30px",
          marginBottom: 2,
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold" sx={{ color: 'rgb(63, 60, 61)' }} >
          Empowering Survivors • Building Community • Creating Hope
        </Typography>
      </Box>

      <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
        A Platform of <span style={{ color: 'rgb(184, 118, 98)' }}>Strength & Solidarity</span>
      </Typography>

      <Typography variant="body1" sx={{ maxWidth: 800, mx: "auto", mt: 1 }}>
        Nuvana connects acid attack survivors across India with resources, support, opportunities, and a community that understands. Together, we rise stronger.
      </Typography>

      <Box sx={{ mt: 4 }}>
  <Button
    variant="contained"
    sx={{
      mr: 2,
      backgroundColor: 'hsla(350, 73.00%, 53.50%, 0.69)', 
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgba(199, 97, 129, 0.85)', 
      },
    }}
  >
    Join Our Community
  </Button>
  <Button
    variant="outlined"
    sx={{
      color: ' rgb(58, 56, 58)',
      borderColor: 'rgb(205, 64, 104)',
      '&:hover': {
        backgroundColor: 'rgb(185, 94, 130)', 
        borderColor: 'rgb(161, 60, 97)',
        color: 'rgb(255, 255, 255)',
      },
    }}
  >
    Explore Resources
  </Button>
</Box>


      <Box sx={{ mt: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Box textAlign="center">
              <Typography variant="h4" fontWeight="bold" sx={{ color: 'rgb(63, 3, 83)' }}>500+</Typography>
              <Typography variant="subtitle1">Community Members</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign="center">
              <Typography variant="h4" fontWeight="bold" sx={{ color: 'rgb(115, 85, 9)' }}>200+</Typography>
              <Typography variant="subtitle1">Resource Centers</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign="center">
              <Typography variant="h4" fontWeight="bold" sx={{ color: 'rgb(55, 8, 109)' }}>50+</Typography>
              <Typography variant="subtitle1">Success Stories</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
