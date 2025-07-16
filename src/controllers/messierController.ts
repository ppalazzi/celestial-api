import { Request, Response } from 'express';
import messierService from '../services/messierService';

export async function getAllObjects(req: Request, res: Response): Promise<void> {
    try {
        const data = await messierService.getAll();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}

export async function getObject(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
        const obj = await messierService.getById(id);
        if (!obj) {
            res.status(404).json({ error: 'Object not found' });
            return;
        }
        res.json(obj);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
}
