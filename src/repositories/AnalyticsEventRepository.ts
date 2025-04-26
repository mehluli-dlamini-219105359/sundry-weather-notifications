// src/domain/repositories/AnalyticsEventRepository.ts

import { Repository } from './Repository';
import { AnalyticsEvent } from '../models/AnalyticsEvent';

export interface AnalyticsEventRepository extends Repository<AnalyticsEvent, string> {
  findByUserId(userId: string): Promise<AnalyticsEvent[]>;
  findByAction(action: string): Promise<AnalyticsEvent[]>;
}