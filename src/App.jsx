// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import CommunitySupport from "./components/CommunitySupport";
import JoinCommunity from "./components/JoinCommunity";
import Footer from "./components/Footer";

import ResourcesPage from "./pages/ResourcesPage"; 
import { useAuth } from "./context/AuthContext";
import LoginPage from './pages/LoginPage';

const App = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <Box sx={{ pt: "60px" }} />

      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CommunitySupport />
              <JoinCommunity />
              <Footer />
            </>
          }
        />

        
        <Route path="/login" element={<LoginPage />} />


        
        <Route
          path="/home"
          element={
            user ? (
              <FeaturesGrid />
            ) : (
              <Navigate to="/signin" replace />
            )
          }
        />

      
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
    </>
  );
};

export default App;
