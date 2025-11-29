export class IncomeVarianceService {
  static calculateVariance(incomes: number[]): number {
    // Placeholder
    return Math.max(...incomes) - Math.min(...incomes);
  }
}