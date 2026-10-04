import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Travel Agency API is running' });
});

// Sample destinations endpoint
app.get('/api/destinations', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Bali Escape',
      country: 'Indonesia',
      price: 899,
      duration: '7 Days',
      rating: 4.9,
    },
    {
      id: 2,
      title: 'Swiss Alps Adventure',
      country: 'Switzerland',
      price: 1499,
      duration: '5 Days',
      rating: 4.8,
    },
    {
      id: 3,
      title: 'Santorini Sunset',
      country: 'Greece',
      price: 1199,
      duration: '6 Days',
      rating: 4.95,
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
