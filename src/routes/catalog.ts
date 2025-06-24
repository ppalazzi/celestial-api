import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    console.log('Catalog route');
		res.send('Catalog is working!');
});

export default router;