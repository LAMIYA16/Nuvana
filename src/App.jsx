import React from "react";
import { Box } from '@mui/material';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import CommunitySupport from './components/CommunitySupport';
import JoinCommunity from './components/JoinCommunity';
import Footer from "./components/Footer";
import MapPage from './pages/MapPage';


const App = () => {
  return (
    <div>
      <Navbar />
      <Box sx={{ pt: '60px' }}></Box>
      <Hero/>     
      <FeaturesGrid />
      <CommunitySupport />  
      <JoinCommunity />  
      <Footer/>
    </div>
  );
};

export default App;
