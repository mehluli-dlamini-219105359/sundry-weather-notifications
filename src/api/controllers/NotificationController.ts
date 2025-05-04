import { Request, Response } from 'express';

// Extend Express Request interface to include 'services'
declare module 'express-serve-static-core' {
  interface Request {
    services: {
      backupService: any;
      notificationService: {
        getByUserId(userId: string): unknown;
        sendNotification: (body: any) => Promise<any>;
        getUserNotifications: (userId: string) => Promise<any>;
        markAllAsSent: (userId: string) => Promise<void>;
      };
    };
  }
}

export class NotificationController {
  static async sendNotification(req: Request, res: Response) {
    const { notificationService } = req.services;
    const notification = await notificationService.sendNotification(req.body);
    res.status(201).json(notification);
  }

  static async getUserNotifications(req: Request, res: Response) {
    const { notificationService } = req.services;
    const notifications = await notificationService.getUserNotifications(req.params.userId);
    res.json(notifications);
  }

  static async markAllNotificationsAsSent(req: Request, res: Response) {
    const { notificationService } = req.services;
    await notificationService.markAllAsSent(req.params.userId);
    res.sendStatus(204);
  }
}