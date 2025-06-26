import React from 'react';
import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#0d121b", color: "#b0bec5", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          
          <Grid item xs={12} sm={6} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <Box
                component="img"
                src="/nuvana logo.png"
                alt="Nuvana Logo"
                sx={{ width: 40, height: 40, mr: 1 }}
              />
              <Typography variant="h6" color="white">Nuvana</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#cfd8dc" }}>
              न्यूवाना - A New Dawn
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "#cfd8dc" }}>
              Empowering acid attack survivors across India with access to resources,<br/> emotional support, and a strong sense of community.
            


            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Community
            </Typography>
            {["Survivor Profiles", "Support Forum", "Success Stories", "Letters of Hope"].map((text) => (
              <Typography key={text}>
                <Link href="#" underline="hover" color="#90a4ae">{text}</Link>
              </Typography>
            ))}
          </Grid>

          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Resources
            </Typography>
            {["Resource Map", "Legal Aid"].map((text) => (
              <Typography key={text}>
                <Link href="#" underline="hover" color="#90a4ae">{text}</Link>
              </Typography>
            ))}
          </Grid>

          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Support
            </Typography>
            {["Donate", "Volunteer", "Contact Us", "Privacy Policy"].map((text) => (
              <Typography key={text}>
                <Link href="#" underline="hover" color="#90a4ae">{text}</Link>
              </Typography>
            ))}
          </Grid>
        </Grid>

      
        <Box textAlign="center" mt={5}>
          <Typography variant="body2" sx={{ color: "#cfd8dc" }}>
            © 2024 Nuvana. Made with <span style={{ color: "#ff1744" }}>❤️</span> for survivors, by the community.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
