import { NotificationPreferenceRepository } from '../repositories/NotificationPreferenceRepository';

export class NotificationPreferenceService {
  constructor(private prefRepo: NotificationPreferenceRepository) {}

  async getPreference(userId: string) {
    return await this.prefRepo.findByUserId(userId);
  }
}