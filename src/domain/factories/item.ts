import { Drink } from '../valueobjects/drink';
import { Item } from '../entities/item';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  price: number;
  drinkName: string;
  stock: number;
}

// あんまり出番ないかも
export class ItemFactory {
  create(props: Props) {
    return new Item({
      id: uuidv4(),
      price: props.price,
      drinkName: props.drinkName,
      stock: props.stock,
    });
  }
}
