import { Router } from 'express';
import { getAllObjects, getObject } from '../controllers/messierController';

const router = Router();

router.get('/', getAllObjects);
router.get('/:id', getObject);

export default router;
