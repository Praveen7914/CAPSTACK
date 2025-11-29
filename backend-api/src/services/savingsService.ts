export class SavingsService {
  static calculateSavings(income: number, expenses: number): number {
    return income - expenses;
  }
}