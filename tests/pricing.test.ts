import { describe, it, expect } from 'vitest';
import { calculateExpressPrice, calculateLowCostPrice } from '../src/lib/pricing';

describe('Pricing calculations', () => {
  it('calculates express prices based on distance tiers', () => {
    expect(calculateExpressPrice(2)).toBe(3700);
    expect(calculateExpressPrice(4)).toBe(4600);
    expect(calculateExpressPrice(6)).toBe(6100);
    expect(calculateExpressPrice(9)).toBe(8200);
    expect(calculateExpressPrice(15)).toBe(15000);
    expect(calculateExpressPrice(25)).toBe('consultar');
  });

  it('calculates low-cost prices based on distance tiers', () => {
    expect(calculateLowCostPrice(2)).toBe(3000);
    expect(calculateLowCostPrice(4)).toBe(4000);
    expect(calculateLowCostPrice(6)).toBe(5300);
    expect(calculateLowCostPrice(9)).toBe(7000);
    expect(calculateLowCostPrice(12)).toBe(8400);
    expect(calculateLowCostPrice(22)).toBe('consultar');
  });
});
