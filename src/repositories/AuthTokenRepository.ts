// src/domain/repositories/AuthTokenRepository.ts

import { Repository } from './Repository';
import { AuthToken } from '../models/AuthToken';

export interface AuthTokenRepository extends Repository<AuthToken, string> {
  findValidTokenForUser(userId: string): Promise<AuthToken | null>;
  revokeAllTokensForUser(userId: string): Promise<void>;
}