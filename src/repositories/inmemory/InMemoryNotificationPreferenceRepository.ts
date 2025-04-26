// src/infrastructure/repositories/InMemoryNotificationPreferenceRepository.ts

import { NotificationPreferenceRepository } from '../../repositories/NotificationPreferenceRepository';
import { NotificationPreference } from '../../models/NotificationPreference';

export class InMemoryNotificationPreferenceRepository implements NotificationPreferenceRepository {
  private store: Map<string, NotificationPreference> = new Map();

  async save(entity: NotificationPreference): Promise<void> {
    this.store.set(entity.id, entity);
  }

  async findById(id: string): Promise<NotificationPreference | null> {
    return this.store.get(id) || null;
  }

  async delete(id: string): Promise<void> {
    this.store.delete(id);
  }

  async findByUserId(userId: string): Promise<NotificationPreference | null> {
    for (const pref of this.store.values()) {
      if (pref.userId === userId) {
        return pref;
      }
    }
    return null;
  }

  async findAll(): Promise<NotificationPreference[]> {
    return Array.from(this.store.values());
  }
}
