import { AllMoneyKind } from '../../domain/valueobjects/money';

export interface InputAmountRepository {
  getCurrent(): number;
  add(money: AllMoneyKind[]): number;
}
