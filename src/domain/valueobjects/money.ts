export const TenYenCoin = 10 as const;
export const FiftyYenCoin = 50 as const;
export const HundredYenCoin = 100 as const;
export const FiveHundredYenCoin = 500 as const;
export const ThousandYenBill = 1000 as const;

export type AllMoneyKind =
  | typeof TenYenCoin
  | typeof FiftyYenCoin
  | typeof HundredYenCoin
  | typeof FiveHundredYenCoin
  | typeof ThousandYenBill;

export type SomeMoney = {
  [key in AllMoneyKind]?: number;
};

export function sum(someMoney: SomeMoney) {
  return Object.entries(someMoney).reduce(
    (sum, [currency, count]) =>
      sum + parseInt(currency) * (count === undefined ? 0 : count),
    0
  );
}
