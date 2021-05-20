import { Drink } from '../valueobjects/drink';

interface ItemProps {
  id: string;
  price: number;
  drinkName: string;
  stock: number;
}

export class Item {
  id: string;
  price: number;
  drink: Drink;
  stock: number;

  constructor(props: ItemProps) {
    // id is like a 1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed
    this.id = props.id;
    this.price = props.price;
    this.drink = new Drink(props.drinkName);
    this.stock = props.stock;
  }
}
