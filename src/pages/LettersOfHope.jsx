import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, Grid, Card, CardContent,
  Container, Stack, Chip, IconButton, Modal, TextField, Checkbox,
  FormControlLabel, Avatar, Divider
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function LettersOfHope() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('letters');
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState('All Messages');
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    type: 'Letter',
    title: '',
    name: '',
    anonymous: false,
    message: '',
    image: '',
  });

  useEffect(() => {
    localStorage.setItem('letters', JSON.stringify(messages));
  }, [messages]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Only image files are allowed.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      try {
        const base64Image = reader.result;
        if (!base64Image || typeof base64Image !== 'string') {
          throw new Error('Invalid image data');
        }

        const isDuplicate = messages.some(
          (msg) => msg.image && msg.image === base64Image
        );

        if (isDuplicate) {
          alert('This image has already been uploaded.');
          return;
        }

        setForm((prev) => ({
          ...prev,
          image: base64Image,
        }));
      } catch (err) {
        console.error('Image processing error:', err);
        alert('Error processing image. Please try a different one.');
      }
    };

    reader.onerror = () => {
      alert('Failed to read the image file.');
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    const newMessage = { ...form };

    // Prevent submission if image is required but not present
    if (newMessage.type === 'Artwork' && !newMessage.image) {
      alert('Please upload an image for your artwork.');
      return;
    }

    const updated = [...messages, newMessage];
    setMessages(updated);
    setForm({
      type: 'Letter',
      title: '',
      name: '',
      anonymous: false,
      message: '',
      image: '',
    });
    handleClose();
  };

  const handleClearMessages = () => {
    setMessages([]);
    localStorage.removeItem('letters');
  };

  const filteredMessages = filter === 'All Messages'
    ? messages
    : messages.filter((msg) => msg.type === filter);

  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/')} sx={{ color: '#333' }}>
            Back to Home
          </Button>
          <Stack direction="column" spacing={0.5} alignItems="flex-start">
  <Stack direction="row" spacing={1} alignItems="center">
    <MailOutlineIcon sx={{ color: '#e91e63', fontSize: 28 }} />
    
    <Typography variant="h6" fontWeight="bold" color="#111">
      Letters of Hope
    </Typography>
  </Stack>
  <Typography variant="body2" color="#555" sx={{ pl: 4.5 }}>
    Messages of support, encouragement, and solidarity
  </Typography>
</Stack>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpen}
            sx={{
              background: 'linear-gradient(to right, #F32C97, #AE3BF3)',
              color: '#fff',
              textTransform: 'none',
              boxShadow: 2,
            }}
          >
            Submit Letter
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            <Stack direction="row" spacing={1} mb={3}>
              {['All Messages', 'Letter', 'Poem', 'Artwork'].map((tab) => (
                <Button
                  key={tab}
                  variant={filter === tab ? 'contained' : 'outlined'}
                  onClick={() => setFilter(tab)}
                  sx={{
                    textTransform: 'none',
                    backgroundColor: filter === tab ? '#111' : '#fff',
                    color: filter === tab ? '#fff' : '#111',
                    borderColor: '#ccc',
                    '&:hover': {
                      backgroundColor: filter === tab ? '#222' : '#f2f2f2',
                    },
                  }}
                >
                  {tab}
                </Button>
              ))}
              <Button
                startIcon={<DeleteIcon />}
                onClick={handleClearMessages}
                variant="outlined"
                sx={{
                  ml: 'auto',
                  color: '#c62828',
                  borderColor: '#c62828',
                  textTransform: 'none',
                }}
              >
                Clear All
              </Button>
            </Stack>

            <Box sx={{
              bgcolor: '#fde9f8',
              border: '1px solid #f8c6ec',
              borderRadius: 2,
              p: 2,
              mb: 3,
            }}>
              <Typography fontWeight="bold" variant="h6" sx={{ color: '#111' }}>
                💓 A Community of Support
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: '#333' }}>
                This space is filled with messages of hope, encouragement, and solidarity from people around the world. Every letter, poem, and artwork shared here represents someone's desire to spread love and support to survivors.
              </Typography>
            </Box>

            {filteredMessages.map((msg, index) => (
              <Card key={`${msg.title}-${index}-${msg.name}`} sx={{ mb: 3, border: '1px solid #eee', boxShadow: 1 }}>
                <CardContent>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" fontWeight="bold">
                      {msg.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {new Date().toLocaleDateString()}
                    </Typography>
                  </Stack>
                  <Typography variant="subtitle2" sx={{ color: '#666' }}>
                    by {msg.anonymous ? 'Anonymous Supporter' : msg.name}
                    <Chip label={msg.type} size="small" sx={{ ml: 1 }} />
                  </Typography>
                  <Typography sx={{ mt: 1, color: '#333' }}>{msg.message}</Typography>
                  {msg.image && msg.type === 'Artwork' && typeof msg.image === 'string' && (
                    <Box
                      component="img"
                      src={msg.image}
                      alt="Uploaded artwork"
                      onError={(e) => (e.target.style.display = 'none')}
                      sx={{ width: '100%', maxHeight: 300, objectFit: 'contain', borderRadius: 2, mt: 2 }}
                    />
                  )}
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
                    <IconButton>
                      <FavoriteBorderIcon />
                    </IconButton>
                    <Chip label="Moderated ✔" color="success" size="small" />
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Grid>

          <Grid item xs={12} md={3}>
            <Stack spacing={3}>
              <Box sx={{ bgcolor: '#fafafa', border: '1px solid #ddd', borderRadius: 2, p: 3, boxShadow: 1 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ color: '#111' }}>
                  Submission Guidelines
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0, fontSize: 14, lineHeight: 1.8, color: '#444' }}>
                  <li>Keep messages positive and supportive</li>
                  <li>Respect privacy and anonymity</li>
                  <li>No personal contact information</li>
                  <li>All submissions are moderated</li>
                  <li>Original content only</li>
                </Box>
              </Box>

              <Box sx={{ bgcolor: '#fafafa', border: '1px solid #ddd', borderRadius: 2, p: 3, boxShadow: 1, textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold" sx={{ color: '#111' }}>Community Impact</Typography>
                <Typography variant="h4" sx={{ color: '#e91e63', fontWeight: 700 }}>247</Typography>
                <Typography variant="body2" sx={{ color: '#444' }}>Letters Shared</Typography>
                <Typography variant="h4" sx={{ color: '#9c27b0', fontWeight: 700 }}>89</Typography>
                <Typography variant="body2" sx={{ color: '#444' }}>Poems & Artwork</Typography>
                <Typography variant="h4" sx={{ color: '#3f51b5', fontWeight: 700 }}>15K+</Typography>
                <Typography variant="body2" sx={{ color: '#444' }}>Hearts Touched</Typography>
              </Box>

              <Box sx={{ bgcolor: '#fafafa', border: '1px solid #ddd', borderRadius: 2, p: 3, boxShadow: 1 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ color: '#111' }}>Featured Contributors</Typography>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: '#ec77d9' }}>AS</Avatar>
                    <Box>
                      <Typography fontWeight="bold" sx={{ color: '#111' }}>Art Students Collective</Typography>
                      <Typography variant="body2" sx={{ color: '#555' }}>12 artworks shared</Typography>
                    </Box>
                  </Stack>
                  <Divider />
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: '#56cfcf' }}>PC</Avatar>
                    <Box>
                      <Typography fontWeight="bold" sx={{ color: '#111' }}>Poetry Circle Mumbai</Typography>
                      <Typography variant="body2" sx={{ color: '#555' }}>8 poems shared</Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: '#fff',
            color: '#111',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Submit Your Letter of Hope
          </Typography>

          <Typography sx={{ color: '#8A9492', fontSize: '0.95rem' }}>
            Type of submission
          </Typography>

          <Stack direction="row" spacing={1} mb={2}>
            {['Letter', 'Poem', 'Artwork'].map((type) => (
              <Button
                key={type}
                variant={form.type === type ? 'contained' : 'outlined'}
                onClick={() => setForm((prev) => ({ ...prev, type }))}
                sx={{
                  backgroundColor: form.type === type ? '#000' : '#fff',
                  color: form.type === type ? '#fff' : '#000',
                  borderColor: '#000',
                  '&:hover': {
                    backgroundColor: form.type === type ? '#111' : '#f0f0f0',
                    borderColor: '#000',
                  },
                  textTransform: 'none',
                }}
              >
                {type}
              </Button>
            ))}
          </Stack>

          <TextField fullWidth name="title" label="Title" variant="outlined" margin="dense" value={form.title} onChange={handleChange} />
          <TextField fullWidth name="name" label="Your Name" variant="outlined" margin="dense" value={form.name} onChange={handleChange} disabled={form.anonymous} />
          <FormControlLabel
            control={
              <Checkbox
                name="anonymous"
                checked={form.anonymous}
                onChange={handleChange}
              />
            }
            label={<Typography sx={{ color: '#8A9492', fontSize: '0.95rem' }}>Submit anonymously</Typography>}
          />

          {form.type === 'Artwork' && (
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ mb: 1, fontSize: '0.9rem', color: '#444' }}>Upload Artwork Image</Typography>
              <input type="file" accept="image/*" onChange={handleImageUpload} />
              {form.image && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="caption" color="text.secondary">Preview:</Typography>
                  <Box
                    component="img"
                    src={form.image}
                    alt="Artwork Preview"
                    sx={{ width: '100%', maxHeight: 200, objectFit: 'cover', borderRadius: 1, mt: 1 }}
                  />
                </Box>
              )}
            </Box>
          )}

          <TextField
            fullWidth
            name="message"
            label="Your Message"
            multiline
            rows={4}
            margin="dense"
            value={form.message}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            sx={{
              mt: 2,
              background: 'linear-gradient(to right, #F32C97, #AE3BF3)',
              color: '#fff',
              textTransform: 'none',
              boxShadow: 2,
              '&:hover': {
                background: 'linear-gradient(to right, #F32C97, #AE3BF3)',
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default LettersOfHope;
