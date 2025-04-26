// src/repositories/inmemory/InMemoryNotificationPreferenceRepository.ts

import { NotificationPreferenceRepository } from '../NotificationPreferenceRepository';
import { NotificationPreference } from '@/models';

export class InMemoryNotificationPreferenceRepository implements NotificationPreferenceRepository {
  findByUserId(userId: string): Promise<NotificationPreference | null> {
    throw new Error('Method not implemented.');
  }
  private preferences: NotificationPreference[] = [];

  async findById(id: string): Promise<NotificationPreference | null> {
    return this.preferences.find(pref => pref.id === id) || null;
  }

  async findAll(): Promise<NotificationPreference[]> {
    return this.preferences;
  }

  async save(entity: NotificationPreference): Promise<NotificationPreference> {
    this.preferences.push(entity);
    return entity;
  }

  async update(entity: NotificationPreference): Promise<NotificationPreference> {
    const index = this.preferences.findIndex(pref => pref.id === entity.id);
    if (index !== -1) {
      this.preferences[index] = entity;
      return entity;
    }
    throw new Error('NotificationPreference not found');
  }

  async delete(id: string): Promise<void> {
    this.preferences = this.preferences.filter(pref => pref.id !== id);
  }
}