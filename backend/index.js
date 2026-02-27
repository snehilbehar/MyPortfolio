const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Simple contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Here you would handle the contact form (e.g., send email, save to DB)
  res.json({ success: true, message: 'Contact form received', data: { name, email, message } });
});

app.get('/', (req, res) => {
  res.send('Portfolio Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
