import { UserRepository } from '../repositories/UserRepository';

export class UserService {
  constructor(private userRepo: UserRepository) {}

  async findUserByEmail(email: string) {
    return await this.userRepo.findByEmail(email);
  }

  async incrementFailedLogins(userId: string) {
    await this.userRepo.incrementFailedLoginAttempts(userId);
  }
}