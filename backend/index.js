const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes'); // Adjust the path to your routes

dotenv.config();  // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Parse JSON requests

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));

// Use user routes for both signup and login
app.use('/api', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
