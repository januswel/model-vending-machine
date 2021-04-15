import { buildListDrinkAvailableForPurchase } from './list-drink-available-for-purchase';
import * as Money from '../domain/valueobjects/money';
import { DrinkRepository } from './';
import { Drink } from '../domain/valueobjects/drink';

export class DrinkRepositoryDummy implements DrinkRepository {
  #items = [
    {
      price: 100,
      drink: new Drink('water'),
    },
    {
      price: 120,
      drink: new Drink('coffee'),
    },
  ];

  getAvailableDrinksFor(total: number): Drink[] {
    return this.#items
      .filter((item) => item.price <= total)
      .map((item) => item.drink);
  }
}

describe('listDrinkAvailableForPurchase', () => {
  it('returns nothing when user passed 80 yen', () => {
    /* const repoGetAvailableDrinksForSpy = jest
      .spyOn(DrinkRepositoryDummy.prototype, 'getAvailableDrinksFor')
      .mockReturnValue([]); */

    expect(
      buildListDrinkAvailableForPurchase(new DrinkRepositoryDummy())([
        new Money.FiftyYenCoin(),
        new Money.TenYenCoin(),
        new Money.TenYenCoin(),
        new Money.TenYenCoin(),
      ])
    ).toEqual([]);
    //expect(repoGetAvailableDrinksForSpy).toHaveBeenCalled();
  });

  it('returns waters when user passed 100 yen', () => {
    expect(
      buildListDrinkAvailableForPurchase(new DrinkRepositoryDummy())([
        new Money.HundredYenCoin(),
      ])
    ).toEqual([new Drink('water')]);
  });

  it('returns waters and coffees when user passed 120 yen', () => {
    expect(
      buildListDrinkAvailableForPurchase(new DrinkRepositoryDummy())([
        new Money.HundredYenCoin(),
        new Money.TenYenCoin(),
        new Money.TenYenCoin(),
      ])
    ).toEqual([new Drink('water'), new Drink('coffee')]);
  });
});
