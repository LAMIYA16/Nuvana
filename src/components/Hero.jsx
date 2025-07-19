import React from "react";
import { Box, Typography, Button, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 8,
        px: 2,
        backgroundImage: "linear-gradient(to bottom, #fffaf3, #ffffff)",
        backgroundSize: "cover",
      }}
    >
      {/* Tagline Banner */}
      <Box
        sx={{
          display: "inline-block",
          px: 2,
          py: 0.5,
          backgroundColor: "#fff2e8",
          borderRadius: "30px",
          mb: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ color: "#9f4312", fontSize: "0.9rem" }}
        >
          Empowering Survivors • Building Community • Creating Hope
        </Typography>
      </Box>

      {/* Heading */}
      <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
        A Platform of{" "}
        <span
          style={{
            background: "linear-gradient(to right, #f97316, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Strength & Solidarity
        </span>
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{ maxWidth: 800, mx: "auto", mt: 1, color: "#4b5563" }}
      >
        Nuvana connects acid attack survivors across India with resources, support,
        opportunities, and a community that understands. Together, we rise stronger.
      </Typography>

      {/* Call to Action */}
      <Box sx={{ mt: 4 }}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            sx={{
              px: 4,
              py: 1.5,
              minWidth: 200,
              background: "linear-gradient(to right, #ec4899, #f97316)",
              color: "white",
              fontWeight: "bold",
              borderRadius: 2,
              boxShadow: 2,
              "&:hover": {
                background: "linear-gradient(to right, #db2777, #fb923c)",
              },
            }}
            onClick={() => {
              const section = document.getElementById("join-community");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Join Community
          </Button>
        </Stack>
      </Box>

      {/* Stats Section */}
      <Box sx={{ mt: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Box textAlign="center">
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: "#f97316" }}
              >
                500+
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Community Members
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign="center">
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: "#facc15" }}
              >
                200+
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Resource Centers
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign="center">
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: "#a855f7" }}
              >
                50+
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Success Stories
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
