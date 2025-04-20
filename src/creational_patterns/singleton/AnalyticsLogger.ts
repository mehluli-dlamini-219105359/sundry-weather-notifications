// AnalyticsLogger.ts
import { AnalyticsEvent } from '@/models/AnalyticsEvent';

export class AnalyticsLogger {
  private static instance: AnalyticsLogger;

  private constructor() {}

  static getInstance(): AnalyticsLogger {
    if (!AnalyticsLogger.instance) {
      AnalyticsLogger.instance = new AnalyticsLogger();
    }
    return AnalyticsLogger.instance;
  }

  log(event: AnalyticsEvent): void {
    console.log(`[Analytics] ${event.timestamp}: ${event.userId} - ${event.action}`);
  }
}
