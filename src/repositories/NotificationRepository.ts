// src/domain/repositories/NotificationRepository.ts

import { Repository } from './Repository';
import { Notification } from '../models/Notification';

export interface NotificationRepository extends Repository<Notification, string> {
  findByUserId(userId: string): Promise<Notification[]>;
  markAllAsSent(userId: string): Promise<void>;
}