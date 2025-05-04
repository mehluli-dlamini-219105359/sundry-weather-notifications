import { AuthTokenRepository } from '../repositories/AuthTokenRepository';

export class AuthTokenService {
  constructor(private tokenRepo: AuthTokenRepository) {}

  async getValidToken(userId: string) {
    return await this.tokenRepo.findValidTokenForUser(userId);
  }

  async revokeUserTokens(userId: string) {
    await this.tokenRepo.revokeAllTokensForUser(userId);
  }
}