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
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home"; // Optional: your home page
import LettersOfHope from "./pages/LettersOfHope"; // ✅ Added Letters of Hope
import DonationPage from "./pages/DonationPage";

import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <Box sx={{ pt: "60px" }} />

      <Routes>
        {/* Landing page */}
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

        {/* Login page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected home route (optional) */}
        <Route
          path="/home"
          element={
            user ? <Home /> : <Navigate to="/login" replace />
          }
        />

        {/* Resources page */}
        <Route path="/resources" element={<ResourcesPage />} />

        {/* ✅ Letters of Hope page */}
        <Route path="/LettersOfHope" element={<LettersOfHope />} />
        <Route path="/DonationPage" element={<DonationPage />} />
      </Routes>
    </>
  );
};

export default App;