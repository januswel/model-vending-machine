import { Drink } from '../valueobjects/drink';
import { v4 as uuidv4 } from 'uuid';

interface ItemProps {
  price: number;
  drinkName: string;
}

export class Item {
  id: string;
  price: number;
  drink: Drink;

  constructor(props: ItemProps) {
    // id is like a 1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed
    this.id = uuidv4();
    this.price = props.price;
    this.drink = new Drink(props.drinkName);
  }
}
