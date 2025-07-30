import assert from 'node:assert/strict';
import test from 'node:test';
import messierService, { MESSIER_URL } from '../src/services/messierService.js';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

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

axios.get = async function <T = any, R = AxiosResponse<T, any>, D = any>(
  url: string,
  _config?: AxiosRequestConfig<D>
): Promise<R> {
	assert.strictEqual(url, MESSIER_URL);
	return { data: mockData } as R;
};


test('getAll returns catalog', async () => {
  const data = await messierService.getAll();
  assert.strictEqual(Array.isArray(data), true);
  assert.strictEqual(data[0].messierNumber, 1);
});

test('getById returns object', async () => {
  const obj = await messierService.getById('M1');
  assert.ok(obj, 'Object should not be undefined');
  assert.strictEqual(obj!.name, 'Crab Nebula');
});
