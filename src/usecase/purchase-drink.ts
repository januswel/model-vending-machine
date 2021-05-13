import { ItemRepository } from './';
import { Item } from '../domain/entities/item';

export type PurchaseDrink = (itemID: string) => Item;

export const buildPurchaseDrink =
  (ItemRepository: ItemRepository): PurchaseDrink =>
  (itemId: string): Item => {
    return ItemRepository.getItem(itemId);
  };
