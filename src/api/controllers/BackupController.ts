import { Request, Response } from 'express';

interface Services {
  findLatestBackup: () => Promise<any>;
}

export class BackupController {
  static async getLatestBackup(req: Request, res: Response) {
    const backupService = req.services?.backupService;
    const backup = await backupService.findLatestBackup();
    if (backup) return res.json(backup);
    res.sendStatus(404);
  }
}