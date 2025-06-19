import React from "react";
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import CommunitySupport from './components/CommunitySupport';
import JoinCommunity from './components/JoinCommunity';
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <Hero/>     
      <FeaturesGrid />
      <CommunitySupport />  
      <JoinCommunity />  
      <Footer/>
    </div>
  );
};

export default App;
