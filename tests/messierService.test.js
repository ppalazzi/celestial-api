import {test, strictEqual} from 'node:test';
import messierService, { MESSIER_URL } from '../src/services/messierService.ts';
import axios from 'axios';

// Mock axios
const mockData = [{
  messierNumber: 1,
  name: 'Crab Nebula',
  alternateNames: [],
  NGC: '1952',
  type: 'Supernova Remnant',
  constellation: 'Taurus',
  rightAscension: '05h 34m 31.97s',
  declination: '+22° 00′ 52.1″',
  magnitude: 8.4,
  size: '6×4 arcmin',
  distance: 6500,
  viewingSeason: 'Winter',
  viewingDifficulty: 'Easy',
  image: 'crab.jpg'
}];

axios.get = async (url) => {
  strictEqual(url, MESSIER_URL);
  return { data: mockData };
};

test('getAll returns catalog', async () => {
  const data = await messierService.getAll();
  strictEqual(Array.isArray(data), true);
  strictEqual(data[0].messierNumber, 1);
});

test('getById returns object', async () => {
  const obj = await messierService.getById('M1');
  strictEqual(obj.name, 'Crab Nebula');
});
