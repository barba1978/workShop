const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json()); // For parsing application/json
app.use(cors()); // Enable CORS

// Connect to MongoDB
mongoose.connect('mongodb+srv://barbieriandrea1978:<mSCyqhAWxOegpFx3>@workshop-database.pgbvci0.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Define a schema
const ItemSchema = new mongoose.Schema({
  name: String,
  value: String,
});

// Create a model from the schema
const Item = mongoose.model('Item', ItemSchema);

// Routes
app.get('/api/items', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

// Listen on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
