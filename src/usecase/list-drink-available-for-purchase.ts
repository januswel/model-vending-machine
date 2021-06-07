import { AllMoneyKind } from '../domain/valueobjects/money';
import { Item } from '../domain/entities/item';
import { ItemRepository } from './';
import { InputAmountRepository } from './repositories/input-amount';

export type ListDrinkAvailableForPurchase = (money: AllMoneyKind[]) => Item[];

export const buildListDrinkAvailableForPurchase =
  (
    itemRepository: ItemRepository,
    inputAmountRepository: InputAmountRepository
  ): ListDrinkAvailableForPurchase =>
  (money: AllMoneyKind[]): Item[] => {
    inputAmountRepository.add(money);

    return itemRepository.getAvailableItemsFor(total);
  };
