import { Box, Typography, Link, Grid } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#212121', color: '#fff', py: 6, px: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>Nuvana</Typography>
          <Typography>Empowering acid attack survivors across India...</Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" gutterBottom>Community</Typography>
          {['Survivor Profiles', 'Support Forum', 'Success Stories', 'Letters of Hope'].map(item => (
            <Link key={item} href="#" color="inherit" display="block" underline="hover">
              {item}
            </Link>
          ))}
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" gutterBottom>Resources</Typography>
          {['Resource Map', 'Legal Aid', 'Job Board', 'Skill Building'].map(item => (
            <Link key={item} href="#" color="inherit" display="block" underline="hover">
              {item}
            </Link>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" gutterBottom>Support</Typography>
          {['Donate', 'Volunteer', 'Contact Us', 'Privacy Policy'].map(item => (
            <Link key={item} href="#" color="inherit" display="block" underline="hover">
              {item}
            </Link>
          ))}
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography>© 2024 Nuvana. Made with ❤️ for survivors, by the community.</Typography>
      </Box>
    </Box>
  );
}
