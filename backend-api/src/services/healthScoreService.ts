export class HealthScoreService {
  static calculateHealthScore(savings: number, expenses: number): number {
    // Placeholder logic
    return savings > expenses ? 100 : 50;
  }
}