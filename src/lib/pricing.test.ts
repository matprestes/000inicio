import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateExpressPrice, calculateLowCostPrice } from './pricing';

test('calculateExpressPrice evaluates tiers correctly', () => {
  // 0 - 3 km -> 3700
  assert.equal(calculateExpressPrice(1.5), 3700);
  assert.equal(calculateExpressPrice(3.0), 3700);

  // 3 - 5 km -> 4600
  assert.equal(calculateExpressPrice(4.2), 4600);
  assert.equal(calculateExpressPrice(5.0), 4600);

  // 5 - 7 km -> 6100
  assert.equal(calculateExpressPrice(6.5), 6100);

  // 7 - 10 km -> 8200
  assert.equal(calculateExpressPrice(8.9), 8200);
  assert.equal(calculateExpressPrice(10.0), 8200);

  // > 10 km -> distance * 1000
  assert.equal(calculateExpressPrice(12), 12000);

  // > 20 km -> 'consultar'
  assert.equal(calculateExpressPrice(21), 'consultar');
});

test('calculateLowCostPrice evaluates tiers correctly', () => {
  // 0 - 3 km -> 3000
  assert.equal(calculateLowCostPrice(2.0), 3000);

  // 3 - 5 km -> 4000
  assert.equal(calculateLowCostPrice(4.5), 4000);

  // 5 - 7 km -> 5300
  assert.equal(calculateLowCostPrice(6.0), 5300);

  // 7 - 10 km -> 7000
  assert.equal(calculateLowCostPrice(9.5), 7000);

  // > 10 km -> distance * 700
  assert.equal(calculateLowCostPrice(14), 9800);

  // > 20 km -> 'consultar'
  assert.equal(calculateLowCostPrice(25), 'consultar');
});
