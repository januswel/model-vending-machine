import * as Money from './money';

describe('Money', () => {
  describe('TenYenCoin', () => {
    it('returns 10', () => {
      expect(Money.TenYenCoin).toBe(10);
    });
  });
  describe('FiftyYenCoin', () => {
    it('returns 50', () => {
      expect(Money.FiftyYenCoin).toBe(50);
    });
  });
  describe('HundredYenCoin', () => {
    it('returns 100', () => {
      expect(Money.HundredYenCoin).toBe(100);
    });
  });
  describe('FiveHundredYenCoin', () => {
    it('returns 500', () => {
      expect(Money.FiveHundredYenCoin).toBe(500);
    });
  });
  describe('ThousandYenBill', () => {
    it('returns 1000', () => {
      expect(Money.ThousandYenBill).toBe(1000);
    });
  });
  describe('sum', () => {
    it('returns sum of money', () => {
      const someMoney: Money.SomeMoney = {
        [Money.TenYenCoin]: 2,
        [Money.HundredYenCoin]: 1,
      };
      expect(Money.sum(someMoney)).toBe(120);
    });
  });
});
