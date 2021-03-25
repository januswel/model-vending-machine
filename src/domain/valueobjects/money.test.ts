import * as Money from './money';

describe('Money', () => {
  describe('TenYenCoin', () => {
    it('returns 10', () => {
      const tenYenCoin = new Money.TenYenCoin();
      expect(tenYenCoin.valueOf()).toBe(10);
    });
  });
  describe('FiftyYenCoin', () => {
    it('returns 50', () => {
      const fiftyYenCoin = new Money.FiftyYenCoin();
      expect(fiftyYenCoin.valueOf()).toBe(50);
    });
  });
  describe('HundredYenCoin', () => {
    it('returns 100', () => {
      const hundredYenCoin = new Money.HundredYenCoin();
      expect(hundredYenCoin.valueOf()).toBe(100);
    });
  });
  describe('FiveHundredYenCoin', () => {
    it('returns 500', () => {
      const fiveHundredYenCoin = new Money.FiveHundredYenCoin();
      expect(fiveHundredYenCoin.valueOf()).toBe(500);
    });
  });
  describe('ThousandYenBill', () => {
    it('returns 1000', () => {
      const thousandYenBill = new Money.ThousandYenBill();
      expect(thousandYenBill.valueOf()).toBe(1000);
    });
  });
});
