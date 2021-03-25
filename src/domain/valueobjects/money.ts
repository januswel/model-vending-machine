export class TenYenCoin {
  valueOf() {
    return 10;
  }
}

export class FiftyYenCoin {
  valueOf() {
    return 50;
  }
}

export class HundredYenCoin {
  valueOf() {
    return 100;
  }
}

export class FiveHundredYenCoin {
  valueOf() {
    return 500;
  }
}

export class ThousandYenBill {
  valueOf() {
    return 1000;
  }
}

export type AllMoneyKind =
  | TenYenCoin
  | FiftyYenCoin
  | HundredYenCoin
  | FiveHundredYenCoin
  | ThousandYenBill;
