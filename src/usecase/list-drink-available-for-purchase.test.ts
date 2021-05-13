import {
  buildListDrinkAvailableForPurchase,
  ListDrinkAvailableForPurchase,
} from './list-drink-available-for-purchase';
import * as Money from '../domain/valueobjects/money';
import { Item } from '../domain/entities/item';
import { ItemRepository } from './';

describe('listDrinkAvailableForPurchase', () => {
  describe('for repository', () => {
    describe('getAvailableItemsFor', () => {
      it('returns an array from injected repository', () => {
        const expected = [
          new Item({
            drinkName: 'water',
            price: 100,
          }),
        ];

        const repository: ItemRepository = {
          getAvailableItemsFor(total: number) {
            return expected;
          },
          getItem(itemId: string): Item {
            return {} as Item;
          },
        };
        const usecase = buildListDrinkAvailableForPurchase(repository);
        const actual = usecase([new Money.FiftyYenCoin()]);
        expect(actual).toEqual(expected);
      });

      describe('arguments', () => {
        let usecase: ListDrinkAvailableForPurchase;
        let spy: any;
        beforeEach(() => {
          const repository = {
            getAvailableItemsFor(total: number) {
              return [];
            },
          };
          spy = jest.spyOn(repository, 'getAvailableItemsFor');
          usecase = buildListDrinkAvailableForPurchase(repository);
        });

        it('returns nothing when user passed 80 yen', () => {
          usecase([
            new Money.FiftyYenCoin(),
            new Money.TenYenCoin(),
            new Money.TenYenCoin(),
            new Money.TenYenCoin(),
          ]);
          expect(spy).toHaveBeenCalledWith(80);
        });

        it('returns waters when user passed 100 yen', () => {
          usecase([new Money.HundredYenCoin()]);
          expect(spy).toHaveBeenCalledWith(100);
        });

        it('returns waters and coffees when user passed 120 yen', () => {
          usecase([
            new Money.HundredYenCoin(),
            new Money.TenYenCoin(),
            new Money.TenYenCoin(),
          ]);
          expect(spy).toHaveBeenCalledWith(120);
        });
      });
    });
  });
});
