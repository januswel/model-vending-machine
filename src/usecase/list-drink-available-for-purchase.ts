import { AllMoneyKind } from '../domain/valueobjects/money';
import { Drink } from '../domain/valueobjects/drink';
import { DrinkRepository } from './';

export type ListDrinkAvailableForPurchase = (money: AllMoneyKind[]) => Drink[];

export const buildListDrinkAvailableForPurchase = (
  drinkRepository: DrinkRepository
): ListDrinkAvailableForPurchase => (money: AllMoneyKind[]): Drink[] => {
  const total = money
    .map((m) => m.valueOf())
    .reduce((sum, current) => {
      return sum + current;
    }, 0);

  return drinkRepository.getAvailableDrinksFor(total);
};
