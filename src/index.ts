import dotenv from 'dotenv';
import express from 'express';

import messierRouter from './routes/messier';

// Load environment variables from standard files
dotenv.config();
dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3005;

app.use('/api/catalog/messier', messierRouter);

app.listen(PORT, () => {
	console.log(`Starting ${process.env.APP_NAME} on port ${PORT}...`);
});
