import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../models/User';

export class InMemoryUserRepository implements UserRepository {
  private storage: { [id: string]: User } = {};

  async save(entity: User): Promise<User> {
    this.storage[entity.userID] = entity;
    return entity;
  }

  async findById(id: string): Promise<User | null> {
    return this.storage[id] ?? null;
  }

  async findAll(): Promise<User[]> {
    return Object.values(this.storage);
  }

  async update(entity: User): Promise<User> {
    this.storage[entity.userID()] = entity;
    return entity;
  }

  async delete(id: string): Promise<void> {
    delete this.storage[id];
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = Object.values(this.storage).find(user => user.getEmail() === email);
    return user ?? null;
  }

  async incrementFailedLoginAttempts(userId: string): Promise<void> {
    const user = await this.findById(userId);
    if (user) {
      user.incrementFailedLoginAttempts();
      this.storage[userId] = user;
    }
  }
}