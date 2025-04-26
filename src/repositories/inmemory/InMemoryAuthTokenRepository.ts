import { AuthTokenRepository } from '../../repositories/AuthTokenRepository';
import { AuthToken } from '../../models/AuthToken';

export class InMemoryAuthTokenRepository implements AuthTokenRepository {
  private storage: { [id: string]: AuthToken } = {};

  async save(entity: AuthToken): Promise<AuthToken> {
    //this.storage[entity.token] = entity;
    return entity;
  }

  async findById(id: string): Promise<AuthToken | null> {
    return this.storage[id] ?? null;
  }

  async findAll(): Promise<AuthToken[]> {
    return Object.values(this.storage);
  }

  async update(entity: AuthToken): Promise<AuthToken> {
   // this.storage[entity.token] = entity;
    return entity;
  }

  async delete(id: string): Promise<void> {
    delete this.storage[id];
  }

  async findValidTokenForUser(userId: string): Promise<AuthToken | null> {
    const now = new Date();
    return Object.values(this.storage).find(
      token => token.userId === userId && token.expiresAt > now
    ) ?? null;
  }

  async revokeAllTokensForUser(userId: string): Promise<void> {
    for (const [tokenId, authToken] of Object.entries(this.storage)) {
      if (authToken.userId === userId) {
        delete this.storage[tokenId];
      }
    }
  }
}