import { DrinkRepository } from './';

export type PurchaseDrink = () => void;

export const buildPurchaseDrink = (
  drinkRepository: DrinkRepository
): PurchaseDrink => (): void => {
  // TODO: Implement
};
