import { buildListDrinkAvailableForPurchase } from './list-drink-available-for-purchase';
import * as Money from '../domain/valueobjects/money';
import { DrinkRepository } from './';
import { Drink } from '../domain/valueobjects/drink';

export class DrinkRepositoryDummy implements DrinkRepository {
  getAvailableDrinksFor(_total: number): Drink[] {
    return [];
  }
}

describe('listDrinkAvailableForPurchase', () => {
  it('returns nothing when user passed 80 yen', () => {
    const repoGetAvailableDrinksForSpy = jest
      .spyOn(DrinkRepositoryDummy.prototype, 'getAvailableDrinksFor')
      .mockReturnValue([]);

    expect(
      buildListDrinkAvailableForPurchase(new DrinkRepositoryDummy())([
        new Money.FiftyYenCoin(),
        new Money.TenYenCoin(),
        new Money.TenYenCoin(),
        new Money.TenYenCoin(),
      ])
    ).toEqual([]);
    expect(repoGetAvailableDrinksForSpy).toHaveBeenCalled();
  });
});
