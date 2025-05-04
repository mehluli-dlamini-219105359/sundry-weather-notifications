import { Request, Response } from 'express';

export class UserController {
  static async findUserByEmail(req: Request, res: Response) {
    const userService = (req.services as any).userService;
    if (!userService) {
      return res.status(500).send('userService not available');
    }
    const user = await userService.findByEmail(req.params.email);
    if (user) return res.json(user);
    res.sendStatus(404);
  }

  static async incrementFailedLogins(req: Request, res: Response) {
    const { notificationService } = req.services;
    res.status(501).send('userService not available');
  }
}