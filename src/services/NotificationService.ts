import { Notification } from '../models/Notification';
import { NotificationRepository } from '../repositories/NotificationRepository';
import { NotificationPreferenceRepository } from '../repositories/NotificationPreferenceRepository';

export class NotificationService {
  constructor(
    private notificationRepository: NotificationRepository,
    private preferenceRepository: NotificationPreferenceRepository
  ) {}

  // Send a notification if user prefers it
  async sendNotification(userId: string, message: string): Promise<Notification | null> {
    const preference = await this.preferenceRepository.findByUserId(userId);

    if (preference?.enabled === false) {
      console.log(`Notifications disabled for user ${userId}`);
      return null;
    }

    const notification: Notification = {
      id: crypto.randomUUID(), // or whatever ID system you use
      userId,
      message,
      sent: false,
      createdAt: new Date(),
    };

    return await this.notificationRepository.save(notification);
  }

  // Retrieve all notifications for a user
  async getUserNotifications(userId: string): Promise<Notification[]> {
    return await this.notificationRepository.findByUserId(userId);
  }

  // Mark all notifications as sent (e.g., after batch email job)
  async markAllNotificationsAsSent(userId: string): Promise<void> {
    await this.notificationRepository.markAllAsSent(userId);
  }
}