import { Request, Response } from 'express';

export class NotificationPreferenceController {
  static async getPreference(req: Request, res: Response) {
    const { notificationService } = req.services;
    const preference = await notificationService.getByUserId(req.params.userId);
    res.json(preference);
  }
}