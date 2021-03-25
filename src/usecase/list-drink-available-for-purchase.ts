import { AllMoneyKind } from '../domain/valueobjects/money';
import { Drink } from '../domain/valueobjects/drink';
export const listDrinkAvailableForPurchase = (
  money: AllMoneyKind[]
): Drink[] => {
  const total = money
    .map((m) => m.valueOf())
    .reduce((sum, current) => {
      return sum + current;
    }, 0);
};
