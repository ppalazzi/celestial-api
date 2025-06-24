import dotenv from 'dotenv';
import express from 'express';

import catalog from './routes/catalog';

// Load environment variables from a .env file into process.env
// Import the Express web framework
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;

app.use('/api/catalog/messier', catalog);

app.listen(PORT, () => {
	console.log(`Starting ${process.env.APP_NAME} on port ${PORT}...`);
});
