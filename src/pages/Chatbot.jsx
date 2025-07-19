import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello! I'm your AI Legal Assistant. I can help you understand your rights, legal procedures, and available support. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const sendMessage = async (text) => {
    const message = text || input;
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: message }]);
    setInput("");

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `You are a helpful and compassionate AI legal assistant dealing with acid attack survivors. Answer in simple, clear language that a non-lawyer can understand. Be empathetic and always suggest next steps or resources if applicable. Keep the responses short. \n\nUser asked: "${message}"`,
                },
              ],
            },
          ],
        }
      );

      const botReply =
        response?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't understand that.";

      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "An error occurred while contacting the AI service.",
        },
      ]);
    }
  };

  const legalTopics = [
    "Compensation Claims",
    "Criminal Proceedings",
    "Medical Rights",
    "Employment Rights",
    "Insurance Claims",
    "Victim Support Schemes",
    "Court Procedures",
    "Legal Documentation",
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on small screens, row on medium+
          gap: 3,
        }}
      >
        {/* Chat Section */}
        <Box sx={{ flex: 2 }}>
          <Paper
            sx={{
              p: 2,
              height: "75vh",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff7f3", // soft peach background
            }}
          >
            <Typography variant="h5" gutterBottom>
              <strong>Legal AI Assistant</strong>{" "}
              <Typography variant="caption" sx={{ ml: 1 }}>
                (Confidential)
              </Typography>
            </Typography>

            {/* Chat Window */}
            <Box
              sx={{
                flexGrow: 1,
                overflowY: "auto",
                bgcolor: "#fff3f0",
                p: 2,
                mb: 1,
                borderRadius: 1,
              }}
            >
              {messages.map((msg, idx) => (
                <Box
                  key={idx}
                  sx={{ mb: 2, textAlign: msg.from === "user" ? "right" : "left" }}
                >
                  <Typography
                    sx={{
                      background:
                        msg.from === "user"
                          ? "#ffe0cc"
                          : "linear-gradient(to right, #ff6b6b, #ff99ac)",
                      color: msg.from === "bot" ? "#fff" : "#333",
                      display: "inline-block",
                      p: 1.5,
                      borderRadius: 2,
                      maxWidth: "80%",
                    }}
                  >
                    {msg.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Input Field */}
            <Box sx={{ display: "flex" }}>
              <TextField
                fullWidth
                placeholder="Ask about your legal rights, procedures, or compensation..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <Button
                onClick={() => sendMessage()}
                sx={{
                  ml: 1,
                  background: "linear-gradient(to right, #ff6b6b, #ff99ac)",
                  color: "#fff",
                  "&:hover": {
                    background: "linear-gradient(to right, #e65c5c, #ff7fa2)",
                  },
                }}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </Box>
          </Paper>
        </Box>

        {/* Sidebar */}
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ p: 2, backgroundColor: "#fff0f5" }}>
            <Typography variant="h6" gutterBottom>
              Quick Legal Topics
            </Typography>
            <List>
              {legalTopics.map((topic, index) => (
                <ListItem button key={index} onClick={() => sendMessage(`Tell me about ${topic}`)}>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default Chatbot;
