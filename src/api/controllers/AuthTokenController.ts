import { Request, Response } from 'express';

export class AuthTokenController {
  static async getValidToken(req: Request, res: Response) {
    const { authTokenService } = req.services;
    const token = await authTokenService.findValidTokenForUser(req.params.userId);
    if (token) return res.json(token);
    res.sendStatus(404);
  }

  static async revokeUserTokens(req: Request, res: Response) {
    if (!('authTokenService' in req.services)) {
      return res.status(500).json({ error: 'authTokenService not available in req.services' });
    }
    const { authTokenService } = req.services as any;
    await authTokenService.revokeAllTokensForUser(req.params.userId);
    res.sendStatus(204);
  }
}