import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const donationItems = [
  {
    emoji: "🩺",
    title: "Medical Care",
    desc: "Surgeries and treatments to help survivors heal.",
    price: "₹500",
    note: "one consultation",
    color: "#fb923c",
  },
  {
    emoji: "🛡️",
    title: "Mental Support",
    desc: "Therapy sessions to rebuild confidence.",
    price: "₹500",
    note: "one therapy session",
    color: "#3b82f6",
  },
  {
    emoji: "🎓",
    title: "Empowerment",
    desc: "Skill training and education for independence.",
    price: "₹5000",
    note: "full training program",
    color: "#10b981",
  },
];

export default function DonationPage() {
  return (
    <Box sx={{ background: "linear-gradient(to bottom, #FFF6F2, #F8FAFC)", minHeight: "100vh", overflowX: "hidden"}}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 10,
          background: "linear-gradient(to right, #fb923c, #ec4899)",
          color: "#fff",
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Make a Donation Today
        </Typography>
        <Typography variant="h6" mb={4}>
          Your generosity transforms lives.
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="https://donate.stripe.com/test_cNieVdacogd93lKeWzcfK01"
          sx={{
            backgroundColor: "#fff",
            color: "#ec4899",
            fontSize: "1.2rem",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: "10px",
            boxShadow: 2,
            "&:hover": {
              backgroundColor: "#f3f4f6",
            },
          }}
        >
          Donate Now
        </Button>
      </Box>

      {/* Donation Options */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          How Your Donation Helps
        </Typography>
        <Grid container spacing={4} mt={2}>
          {donationItems.map(({ emoji, title, desc, price, note, color }, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card
                elevation={3}
                sx={{
                  borderTop: `5px solid ${color}`,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography fontSize="3rem" mb={1}>
                    {emoji}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {title}
                  </Typography>
                  <Typography color="text.secondary" mt={1}>
                    {desc}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" mt={2}>
                    {price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {note}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
