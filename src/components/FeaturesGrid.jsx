import React from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MapIcon from '@mui/icons-material/Map';
import GavelIcon from '@mui/icons-material/Gavel';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import WorkIcon from '@mui/icons-material/Work'; // ✅ ADD THIS LINE


const features = [
  {
    title: 'Geo-tagged Resource Map',
    icon: <MapIcon fontSize="medium" />,
    path: '/map',
    iconBg: '#fdecef',
    iconColor: '#ec4899',
    description:
      'Interactive map of India showing NGOs, medical facilities, legal aid, and counseling centers.',
    bullets: [
      '📍 Location-based search',
      '☎️ Direct contact info',
      '⭐ Community ratings',
    ],
    hoverBorderColor: '#f9c5d1',
  },
  {
    title: 'AI Legal Aid Assistant',
    icon: <GavelIcon fontSize="medium" />,
    path: '/legal-aid',
    iconBg: '#f3e8ff',
    iconColor: '#a855f7',
    description:
      'Get instant legal guidance and assistance using advanced AI technology.',
    bullets: [
      '⚖️ 24/7 legal guidance',
      '🌐 Multi-language support',
      '🔒 Confidential consultations',
    ],
    hoverBorderColor: '#e5d0fb',
  },
  {
    title: 'Peer Support',
    icon: <SupportAgentIcon fontSize="medium" />,
    path: '/support',
    iconBg: '#e0f2fe',
    iconColor: '#3b82f6',
    description:
      'A safe, moderated space to share experiences, and offer mutual support in a community.',
    bullets: [
      '🧑‍⚖️ Moderated discussions',
      '❤️ Emotional support',
      '🧑‍🤝‍🧑 Peer connections',
    ],
    hoverBorderColor: '#bfdcff',
  },
  {
    title: 'Inspiration Hub',
    icon: <EmojiEmotionsIcon fontSize="medium" />,
    path: '/inspiration',
    iconBg: '#fff7ed',
    iconColor: '#f59e0b',
    description:
      'Read real-life stories of resilience, and inspiring journeys of survivors.',
    bullets: [
      '🏆 Success stories',
      '💪 Resilience features',
      '🧩 Community initiatives',
    ],
    hoverBorderColor: '#f7d8a6',
  },
  {
    title: 'Skill Building & Job Board',
    icon: <WorkIcon fontSize="medium" />,
    path: '/jobs',
    iconBg: '#ecfdf5',
    iconColor: '#10b981',
    description:
      'Access inclusive employment opportunities and skill development programs.',
    bullets: [
      '🧳 Inclusive job listings',
      '📘 Skill workshops',
      '🧑‍🏫 Mentorship programs',
    ],
    hoverBorderColor: '#a7f3d0',
  },

];

function FeaturesGrid() {
  const navigate = useNavigate();

  return (
    <Box
      id="resources-section"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #fff7f1, #fff)',
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{
          color: '#1e293b',
              px: { xs: 2, sm: 4 }, // horizontal padding
    py: { xs: 2, sm: 3 },
          fontSize: { xs: '2rem', sm: '2.5rem' },
          lineHeight: 1.3,
        }}
      >
        Comprehensive Support Ecosystem
      </Typography>

      
      {/* Features Grid */}
      <Grid container spacing={5} justifyContent="center">
        {features.map((feature) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={feature.title}
            sx={{ display: 'flex' }}
            id={
              feature.title.includes('Resource Map') ? 'feature-map' :
              feature.title.includes('Legal Aid') ? 'feature-legal' :
              feature.title.includes('Support') ? 'feature-forum' :
              feature.title.includes('Inspiration') ? 'feature-success' : undefined
            }
          >
            <Card
              elevation={1}
              sx={{
                flexGrow: 1,
                borderRadius: 4,
                border: '2px solid transparent',
                transition: 'all 0.3s ease',
                backgroundColor: '#ffffff',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  borderColor: feature.hoverBorderColor,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.07)',
                },
              }}
            >
              <CardActionArea
                onClick={() => navigate(feature.path)}
                sx={{ height: '100%' }}
              >
                <CardContent sx={{ px: 3, py: 3 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      backgroundColor: feature.iconBg,
                      color: feature.iconColor,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: '#1e293b' }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1.5 }}
                  >
                    {feature.description}
                  </Typography>

                  <List dense disablePadding>
                    {feature.bullets.map((item, i) => (
                      <ListItem
                        key={i}
                        disableGutters
                        sx={{ pl: 0, py: 0.5 }}
                      >
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturesGrid;
