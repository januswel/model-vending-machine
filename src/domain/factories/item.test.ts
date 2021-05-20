import { Item } from '../entities/item';
import { Drink } from '../valueobjects/drink';
import { ItemFactory } from './item';

describe('ItemFactory', () => {
  describe('create', () => {
    const factory = new ItemFactory();
    let item: Item;

    beforeEach(() => {
      item = factory.create({
        price: 100,
        drinkName: 'name',
        stock: 1,
      });
    });

    it('returns new Item object', () => {
      expect(item.price).toBe(100);
      expect(item.drink.name).toEqual('name');
    });

    it('should have "id" property and its format is UUID v4', () => {
      expect(item.id).toMatch(/^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/);
    });

    it('should have "id" property that is unique', () => {
      const anotherItem = factory.create({
        price: 100,
        drinkName: 'name',
        stock: 1,
      });
      expect(item.id).not.toBe(anotherItem.id);
    });
  });
});
