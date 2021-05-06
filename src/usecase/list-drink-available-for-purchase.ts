import { AllMoneyKind } from '../domain/valueobjects/money';
import { Item } from '../domain/entities/item';
import { ItemRepository } from './';

export type ListDrinkAvailableForPurchase = (money: AllMoneyKind[]) => Item[];

export const buildListDrinkAvailableForPurchase = (
  drinkRepository: ItemRepository
): ListDrinkAvailableForPurchase => (money: AllMoneyKind[]): Item[] => {
  const total = money
    .map((m) => m.valueOf())
    .reduce((sum, current) => {
      return sum + current;
    }, 0);

  return drinkRepository.getAvailableItemsFor(total);
};
