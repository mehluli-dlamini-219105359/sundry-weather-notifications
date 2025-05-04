// src/services/AnalyticsEventService.ts
import { AnalyticsEventRepository } from '../repositories/AnalyticsEventRepository';
import { AnalyticsEvent } from '../models/AnalyticsEvent';

export class AnalyticsEventService {
  getEventsByUser(userId: string) {
      throw new Error('Method not implemented.');
  }
  constructor(private analyticsEventRepository: AnalyticsEventRepository) {}

  async logEvent(event: AnalyticsEvent): Promise<AnalyticsEvent> {
    return this.analyticsEventRepository.save(event);
  }

  async getEventsByUserId(userId: string): Promise<AnalyticsEvent[]> {
    return this.analyticsEventRepository.findByUserId(userId);
  }

  async getEventsByAction(action: string): Promise<AnalyticsEvent[]> {
    return this.analyticsEventRepository.findByAction(action);
  }
}