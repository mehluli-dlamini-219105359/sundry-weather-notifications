// src/domain/repositories/NotificationPreferenceRepository.ts

import { Repository } from './Repository';
import { NotificationPreference } from '../models/NotificationPreference';

export interface NotificationPreferenceRepository extends Repository<NotificationPreference, string> {
  findByUserId(userId: string): Promise<NotificationPreference | null>;
}