import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Modal,
  Button,
} from '@mui/material';

const Footer = () => {
  const [openContact, setOpenContact] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  const scrollAndHighlight = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('highlight');
      setTimeout(() => {
        el.classList.remove('highlight');
      }, 2000);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box sx={{ backgroundColor: '#0d121b', color: '#b0bec5', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Logo & Intro */}
          <Grid item xs={12} sm={6} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <Box
                component="img"
                src="/nuvana logo.png"
                alt="Nuvana Logo"
                sx={{ width: 40, height: 40, mr: 1 }}
              />
              <Typography variant="h6" color="white">
                Nuvana
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#cfd8dc' }}>
              न्यूवाना - A New Dawn
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: '#cfd8dc' }}>
              Empowering acid attack survivors across India with access to
              resources,
              <br />
              emotional support, and a strong sense of community.
            </Typography>
          </Grid>

          {/* Community Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Community
            </Typography>
            <Typography>
              <Link
                onClick={() => scrollAndHighlight('feature-forum')}
                underline="hover"
                color="#90a4ae"
              >
                Support Forum
              </Link>
            </Typography>
            <Typography>
              <Link
                onClick={() => scrollAndHighlight('feature-success')}
                underline="hover"
                color="#90a4ae"
              >
                Success Stories
              </Link>
            </Typography>
            <Typography>
              <Link
                onClick={() => scrollToSection('letters-of-hope')}
                underline="hover"
                color="#90a4ae"
              >
                Letters of Hope
              </Link>
            </Typography>
            <Typography>
              <Link
                onClick={() => scrollToSection('join-community')}
                underline="hover"
                color="#90a4ae"
              >
                Volunteer
              </Link>
            </Typography>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Resources
            </Typography>
            <Typography>
              <Link
                onClick={() => scrollAndHighlight('feature-map')}
                underline="hover"
                color="#90a4ae"
              >
                Resource Map
              </Link>
            </Typography>
            <Typography>
              <Link
                onClick={() => scrollAndHighlight('feature-legal')}
                underline="hover"
                color="#90a4ae"
              >
                Legal Aid
              </Link>
            </Typography>
          </Grid>

          {/* Support Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Support
            </Typography>
            <Typography>
              <Link
                onClick={() => scrollToSection('support')}
                underline="hover"
                color="#90a4ae"
              >
                Donate
              </Link>
            </Typography>
            <Typography>
              <Link
                onClick={() => setOpenContact(true)}
                underline="hover"
                color="#90a4ae"
              >
                Contact Us
              </Link>
            </Typography>
            <Typography>
              <Link
                onClick={() => setOpenPrivacy(true)}
                underline="hover"
                color="#90a4ae"
              >
                Privacy Policy
              </Link>
            </Typography>
          </Grid>
        </Grid>

        {/* Footer Note */}
        <Box textAlign="center" mt={5}>
          <Typography variant="body2" sx={{ color: '#cfd8dc' }}>
            © 2025 Nuvana. Made with{' '}
            <span style={{ color: '#ff1744' }}>❤️</span> for survivors, by the
            community.
          </Typography>
        </Box>
      </Container>

      {/* Contact Modal */}
      <Modal open={openContact} onClose={() => setOpenContact(false)}>
        <Box
          sx={{
            p: 4,
            bgcolor: 'white',
            borderRadius: 2,
            width: 400,
            mx: 'auto',
            mt: '15%',
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography>Email: support@nuvana.org</Typography>
          <Button
            onClick={() => setOpenContact(false)}
            variant="contained"
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal open={openPrivacy} onClose={() => setOpenPrivacy(false)}>
        <Box
          sx={{
            p: 4,
            bgcolor: 'white',
            borderRadius: 2,
            width: '90%',
            maxWidth: 500,
            maxHeight: '60vh',
            overflowY: 'auto',
            mx: 'auto',
            mt: '10%',
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Privacy Policy
          </Typography>

          <Typography paragraph>
            At Nuvana, your privacy matters to us. We only collect personal
            information (like your name or email) when you choose to share
            it,such as when you:
          </Typography>

          <ul>
            <li>Submit a letter or story</li>
            <li>Sign up to volunteer</li>
            <li>Make a donation</li>
            <li>Contact us or subscribe to updates</li>
          </ul>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            How We Use Your Information
          </Typography>

          <Typography paragraph>We use your information to:</Typography>

          <ul>
            <li>Respond to your messages</li>
            <li>Send updates (only if you’ve agreed)</li>
            <li>Keep donation and support records</li>
          </ul>

          <Typography paragraph>
            We never sell or share your information with anyone.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Cookies
          </Typography>

          <Typography paragraph>
            We use cookies to improve your experience. You can manage cookies
            through your browser settings.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Security
          </Typography>

          <Typography paragraph>
            We protect your data using secure technology for donations and
            forms.
          </Typography>

          <Button
             onClick={() => setOpenPrivacy(false)}
             variant="contained"
             sx={{ mt: 3 }}
          >
           Close
          </Button>

        </Box>
      </Modal>
    </Box>
  );
};

export default Footer;
