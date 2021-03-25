import * as Drink from './drink';

describe('Drink', () => {
  describe('Drink', () => {
    it('return drink name', () => {
      const drink = new Drink.Drink('soda');
      expect(drink.name).toBe('soda');
    });
  });
});
