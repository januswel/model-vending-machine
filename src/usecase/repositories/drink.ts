import { Drink } from '../../domain/valueobjects/drink';

export interface DrinkRepository {
  getAvailableDrinksFor(total: number): Drink[];
}
