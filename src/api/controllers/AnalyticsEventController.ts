import { Request, Response } from 'express';

export class AnalyticsEventController {
  static async getEventsByUser(req: Request, res: Response) {
    const analyticsService = (req.services as any).analyticsService;
    const events = await analyticsService.findByUserId(req.params.userId);
    res.json(events);
  }

  static async getEventsByAction(req: Request, res: Response) {
    const analyticsService = (req.services as any).analyticsService;
    const events = await analyticsService.findByAction(req.params.action);
    res.json(events);
  }
}