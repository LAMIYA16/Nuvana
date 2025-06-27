import React from "react";
import { Box } from '@mui/material';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import CommunitySupport from './components/CommunitySupport';
import JoinCommunity from './components/JoinCommunity';
import Footer from "./components/Footer";
/*import SignIn from './pages/SignIn';*/


const App = () => {
  return (
    <div>
      <Navbar />
      <Box sx={{ pt: '60px' }}></Box>

      <section id="resources">
        <Hero/>
      
        
      </section>

      <section id="features">
        <FeaturesGrid/>
      </section>

      <section id="support">
        <CommunitySupport />
      </section>

      <section id="about">
        <JoinCommunity />
        <Footer />
      </section>
    </div>
  );
};

export default App;
