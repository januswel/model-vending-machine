import { Item } from './item';
import { Drink } from '../valueobjects/drink';

describe('Item', () => {
  describe('When initialized', () => {
    let item: Item;

    beforeEach(() => {
      item = new Item({
        id: '1',
        price: 100,
        drinkName: 'name',
        stock: 1,
      });
    });

    it('should have "id" property and its value is "1"', () => {
      expect(item.id).toBe('1');
    });

    it('should have "price" property and its value is 100', () => {
      expect(item.price).toBe(100);
    });

    it('should have "drink" property and it is an instance of Drink with provided name', () => {
      expect(item.drink.name).toBe('name');
    });

    it('should have "stock" property and it its value is 1', () => {
      expect(item.stock).toBe(1);
    });
  });
});
