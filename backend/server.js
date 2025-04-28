const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoutes = require('./src/routes/users'); 

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());  // Make sure this line is here
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// API Routes
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));