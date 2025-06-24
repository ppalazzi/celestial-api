import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
dotenv.config({ path: '.env.local' });

export const MESSIER_URL = process.env.MESSIER_URL ||
  'https://osricdienda.com/messier-api/messier.json';

import { MessierObject } from '../models/messierObject';

class MessierService {
    private catalog: MessierObject[] | null = null;

    private async fetchCatalog(): Promise<MessierObject[]> {
        if (!this.catalog) {
            const response = await axios.get<MessierObject[]>(MESSIER_URL);
            this.catalog = response.data;
        }
        return this.catalog;
    }

    async getAll(): Promise<MessierObject[]> {
        return await this.fetchCatalog();
    }

    async getById(id: string): Promise<MessierObject | undefined> {
        const catalog = await this.fetchCatalog();
        const normalized = id.replace(/^m/i, '');
        return catalog.find((obj) => obj.messierNumber.toString() === normalized);
    }
}

export default new MessierService();
