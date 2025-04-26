import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../models/User';
import { v4 as uuidv4 } from 'uuid'; // Using uuid for ID generation

export class InMemoryUserRepository implements UserRepository {
  update(entity: User): Promise<User> {
      throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
      throw new Error('Method not implemented.');
  }
  private readonly users: Map<string, User> = new Map();

  /**
   * Saves (creates or updates) a user in the map.
   * If the user has no ID, a new UUID is generated.
   * Updates the 'updatedAt' timestamp.
   * @param user The user entity to save.
   * @returns A promise resolving to the saved user entity (a copy).
   */
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
      userToSave = {
        id: newId,
        name: user.name || 'Default Name', 
        email: user.email,
        passwordHash: user.passwordHash || '', // Provide defaults
        failedLoginAttempts: user.failedLoginAttempts || 0,
        createdAt: user.createdAt || now, // Set createdAt only if new
        updatedAt: now,
        ...(user as User),
      };

       if (!userToSave.email) throw new Error("User email cannot be empty.");
    }

    // Create a copy to store in the map to simulate immutability
    const savedUserCopy = { ...userToSave };
    this.users.set(savedUserCopy.id, savedUserCopy);

    // Return another copy to the caller
    return { ...savedUserCopy };
  }

  /**
   * Finds a user by their unique ID.
   * @param id The user ID (string).
   * @returns A promise resolving to a copy of the user object or null if not found.
   */
  async findById(id: string): Promise<User | null> {
    const user = this.users.get(id);
    // Return a copy to prevent external modification of the stored object
    return user ? { ...user } : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.email === email) {
        // Return a copy
        return { ...user };
      }
    }
    return null; // Not found
  }

  /**
   * Finds all users stored in the map.
   * @returns A promise resolving to an array of copies of all user objects.
   */
  async findAll(): Promise<User[]> {
    // Return copies of the users
    return Array.from(this.users.values()).map(user => ({ ...user }));
  }

  /**
   * Deletes a user from the map by their unique ID.
   * @param id The ID of the user to delete.
   * @returns A promise that resolves when deletion attempt is complete.
   */
  async deleteById(id: string): Promise<void> {
    this.users.delete(id);
    // No return value needed for void, Promise resolves implicitly
  }

  /**
   * Increments the failed login counter for a specific user.
   * Modifies the user object directly within the map.
   * @param userId The ID of the user whose counter should be incremented.
   * @returns A promise that resolves when the increment is done, or rejects if user not found.
   */
  async incrementFailedLoginAttempts(userId: string): Promise<void> {
    const user = this.users.get(userId);
    if (!user) {
      // Option 1: Silently do nothing if user not found
      // console.warn(`Attempted to increment login attempts for non-existent user ID: ${userId}`);
      // return;

      // Option 2: Throw an error (often preferred for clarity)
       throw new Error(`User with ID ${userId} not found.`);
    }

    // Increment the counter directly on the object stored in the map
    user.failedLoginAttempts = (user.failedLoginAttempts || 0) + 1;
    user.updatedAt = new Date(); // Also update the timestamp

    // No need to explicitly save back to map because we modified the object reference directly
  }


  async clear(): Promise<void> {
      this.users.clear();
  }
}
