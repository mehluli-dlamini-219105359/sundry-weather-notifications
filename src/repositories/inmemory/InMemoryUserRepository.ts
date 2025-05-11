import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../models/User';
import { v4 as uuidv4 } from 'uuid'; // Using uuid for ID generation

export class InMemoryUserRepository implements UserRepository {
  private readonly users: Map<string, User> = new Map();

  async save(user: User): Promise<User> {
    const now = new Date();
    let userToSave: User;

    if (user.id && this.users.has(user.id)) {
      const existingUser = this.users.get(user.id)!;
      userToSave = {
        ...existingUser, 
        ...user, 
        updatedAt: now, 
        passwordHash: user.passwordHash || existingUser.passwordHash || '', 
        failedLoginAttempts: user.failedLoginAttempts ?? existingUser.failedLoginAttempts ?? 0, 
        preferences: user.preferences || existingUser.preferences || {}, 
      };
    } else {
      const newId = user.id || uuidv4(); 
      userToSave = new User(
        newId,
        user.email,
        user.passwordHash || '', // Provide defaults
        user.role || 'user',  // Default role
      );
      userToSave.createdAt = user.createdAt || now; // Set createdAt only if new
      userToSave.updatedAt = now;
    }

    // Save user as User instance in the Map
    this.users.set(userToSave.id, userToSave);

    // Return the User instance
    return userToSave;
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.get(id);
    return user ? user : null; // Return the full User instance, no need for cloning
  }

  async findByEmail(email: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.email === email) {
        return user; // Return the full User instance
      }
    }
    return null;
  }

  async findAll(): Promise<User[]> {
    // Return an array of User instances
    return Array.from(this.users.values());
  }

  async deleteById(id: string): Promise<void> {
    this.users.delete(id);
  }

  async incrementFailedLoginAttempts(userId: string): Promise<void> {
    const user = this.users.get(userId);
    if (!user) {
      throw new Error(`User with ID ${userId} not found.`);
    }

    user.failedLoginAttempts = (user.failedLoginAttempts || 0) + 1;
    user.updatedAt = new Date();
  }

  async clear(): Promise<void> {
    this.users.clear();
  }
}