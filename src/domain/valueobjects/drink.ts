export class Drink {
  private name_: string;

  constructor(name: string) {
    this.name_ = name;
  }

  get name(): string {
    return this.name_;
  }
}
