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

const features = [
  {
    title: 'Geo-tagged Resource Map',
    icon: <MapIcon />,
    path: '/map',
    iconBg: '#fdecef',
    iconColor: '#ec407a',
    description:
      'Interactive map of India showing NGOs, medical facilities, legal aid, and counseling centers.',
    bullets: [
      '📍 Location-based search',
      '☎️ Direct contact info',
      '⭐ Community ratings',
    ],
    hoverBorderColor: 'rgb(233, 179, 197)',
  },
  {
    title: 'AI Legal Aid Assistant',
    icon: <GavelIcon />,
    path: '/legal-aid',
    iconBg: '#f3e8ff',
    iconColor: '#9c27b0',
    description:
      'Get instant legal guidance and assistance using advanced AI technology.',
    bullets: [
      '⚖️ 24/7 legal guidance',
      '🌐 Multi-language support',
      '🔒 Confidential consultations',
    ],
    hoverBorderColor: 'rgb(225, 166, 237)',
  },
  {
    title: 'Peer Support',
    icon: <SupportAgentIcon />,
    path: '/support',
    iconBg: '#e8f5fe',
    iconColor: '#2196f3',
    description:
      'A safe, moderated space to share experiences, and offer mutual support in a community.',
    bullets: [
      '🧑‍⚖️ Moderated discussions',
      '❤️ Emotional support',
      '🧑‍🤝‍🧑 Peer connections',
    ],
    hoverBorderColor: 'rgb(199, 198, 220)',
  },
  {
    title: 'Inspiration Hub',
    icon: <EmojiEmotionsIcon />,
    path: '/inspiration',
    iconBg: '#fff8e1',
    iconColor: '#ffb300',
    description:
      'Read real-life stories of resilience, and inspiring journeys of survivors.',
    bullets: [
      '🏆 Success stories',
      '💪 Resilience features',
      '🧩 Community initiatives',
    ],
    hoverBorderColor: 'rgb(213, 174, 142)',
  },
];

function FeaturesGrid() {
  const navigate = useNavigate();

  return (
    <Box
      id="resources-section"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #ffffff, #fff)',
        py: 6,
        px: 3,
      }}
    >
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Comprehensive Support Ecosystem
      </Typography>

      <Typography variant="h6" align="center" mb={4}>
        Every feature is designed with survivors' needs at the center, providing tools for healing, growth, and empowerment.
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {features.map((feature, index) => (
           <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={feature.title}
           id={
             feature.title.includes('Resource Map') ? 'feature-map' :
             feature.title.includes('Legal Aid') ? 'feature-legal' :
             feature.title.includes('Support') ? 'feature-forum' :
             feature.title.includes('Inspiration') ? 'feature-success' : undefined
              }
         sx={{ display: 'flex' }}
          >

            <Card
              sx={(theme) => ({
                flexGrow: 1,
                border: '2px solid transparent',
                transition: '0.3s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: 4,
                  borderColor: feature.hoverBorderColor,
                },
              })}
            >
              <CardActionArea
                 onClick={() => navigate(feature.path)}
                 sx={{ height: '100%', width: '100%' }}
              >

                <CardContent>
                 
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

                
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {feature.title}
                  </Typography>

                
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {feature.description}
                  </Typography>

                  
                  <List dense>
                    {feature.bullets.map((item, i) => (
                      <ListItem key={i} disableGutters sx={{ pl: 0 }}>
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
