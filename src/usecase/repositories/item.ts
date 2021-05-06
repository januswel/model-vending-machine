import { Item } from '../../domain/entities/item';

export interface ItemRepository {
  getAvailableItemsFor(total: number): Item[];
}
