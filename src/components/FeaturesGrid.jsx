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
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import MapIcon from '@mui/icons-material/Map';
import GavelIcon from '@mui/icons-material/Gavel';
import WorkIcon from '@mui/icons-material/Work';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const features = [
  
  {
    title: 'Geo-tagged Resource Map',
    icon: <MapIcon fontSize="large" />,
    path: '/map',
    description: 'Locate support centers, NGOs, and care facilities near you.',
    bullets: ['Location based seacrh', 'Direct contact info', 'community ratings'],
  },
  {
    title: 'AI Legal Aid Assistant',
    icon: <GavelIcon fontSize="large" />,
    path: '/legal-aid',
    description: 'Find guidance and assistance on legal rights and support.',
    bullets: ['24/7 legal guidance', 'Multi language support', 'Confidential consulations'],
  },
  
  {
    title: 'Peer Support',
    icon: <SupportAgentIcon fontSize="large" />,
    path: '/support',
    description: 'Talk to others, join groups, and find emotional support.',
    bullets: ['Moderated discussions', 'Emotional support', 'Peer connections'],
  },
  {
    title: 'Inspiration Hub',
    icon: <EmojiEmotionsIcon fontSize="large" />,
    path: '/inspiration',
    description: 'Read real-life stories and inspiring journeys of survivors.',
    bullets: ['Success stories', 'Resilience features', 'Community initiatives'],
  },
];

function FeaturesGrid() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right,rgb(255, 255, 255), #fff)', 
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
        {features.map((feature) => (
          <Grid item xs={12} sm={6} md={4} key={feature.title} sx={{ display: 'flex' }}>
            <Card
             sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transition: '0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
                },
              }}
  >
            <CardActionArea
                    onClick={() => navigate(feature.path)}
                    sx={{ height: '100%', width: '100%' }}
            >
                <CardContent>
                  {/* Icon top-left */}
                  <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
                    {feature.icon}
                  </Box>

                  {/* Title with left padding to avoid overlapping icon */}
                  <Typography variant="h6" fontWeight="bold" sx={{ pl: 6, mb: 1 }}>
                    {feature.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ pl: 6, mb: 2 }}>
                    {feature.description}
                  </Typography>

                  <List dense sx={{ pl: 4 }}>
                    {feature.bullets.map((item, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon color="success" fontSize="small" />
                        </ListItemIcon>
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
