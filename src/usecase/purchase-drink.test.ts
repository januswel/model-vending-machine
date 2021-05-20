import { buildPurchaseDrink, PurchaseDrink } from './purchase-drink';
import { ItemRepository } from './';

import { Item } from '../domain/entities/item';

describe('purchaseDrink', () => {
  describe('for repository', () => {
    describe('getItem', () => {
      it('returns item from injected repository', () => {
        const dummyItemId = 'dummyId';
        const expected = new Item({
          id: dummyItemId,
          drinkName: 'water',
          price: 100,
          stock: 1,
        });

        const repository: ItemRepository = {
          getAvailableItemsFor(total: number): Item[] {
            return [];
          },
          getItem(itemId: string) {
            return expected;
          },
        };
        const usecase = buildPurchaseDrink(repository);
        const actual = usecase(dummyItemId);
        expect(actual).toEqual(expected);
      });

      describe('arguments', () => {});
    });
  });
});
