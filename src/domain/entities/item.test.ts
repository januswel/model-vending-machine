import { Item } from './item';
import { Drink } from '../valueobjects/drink';

describe('Item', () => {
  describe('When initialized', () => {
    let item: Item;

    beforeEach(() => {
      item = new Item({
        price: 100,
        drinkName: 'name',
      });
    });

    it('should have "id" property and its format is UUID v4', () => {
      expect(item.id).toMatch(/^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/);
    });

    it('should have "id" property that is unique', () => {
      const anotherItem = new Item({
        price: 100,
        drinkName: 'name',
      });
      expect(item.id).not.toBe(anotherItem.id);
    });

    it('should have "price" property and its value is 100', () => {
      expect(item.price).toBe(100);
    });

    it('should have "drink" property and it is an instance of Drink with provided name', () => {
      expect(item.drink.name).toBe('name');
    });
  });
});
