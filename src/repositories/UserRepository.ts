// src/domain/repositories/UserRepository.ts

import { Repository } from './Repository';
import { User } from '../models/User';

export interface UserRepository extends Repository<User, string> {
  findByEmail(email: string): Promise<User | null>;
  incrementFailedLoginAttempts(userId: string): Promise<void>;
}