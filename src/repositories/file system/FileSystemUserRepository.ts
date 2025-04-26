// src/repositories/filesystem/FileSystemUserRepository.ts

import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../models/User';

export class FileSystemUserRepository implements UserRepository {
  constructor(private filePath: string) {
    // Example: filePath = './data/users.json'
  }

  async save(entity: User): Promise<User> {
    // TODO: Serialize and write user to JSON file
    throw new Error('FileSystem save not implemented yet.');
  }

  async findById(id: string): Promise<User | null> {
    // TODO: Read file and find user by ID
    throw new Error('FileSystem findById not implemented yet.');
  }

  async findAll(): Promise<User[]> {
    // TODO: Load all users from file
    throw new Error('FileSystem findAll not implemented yet.');
  }

  async update(entity: User): Promise<User> {
    // TODO: Update user in JSON file
    throw new Error('FileSystem update not implemented yet.');
  }

  async delete(id: string): Promise<void> {
    // TODO: Delete user from JSON file
    throw new Error('FileSystem delete not implemented yet.');
  }

  async findByEmail(email: string): Promise<User | null> {
    // TODO: Find user by email inside file
    throw new Error('FileSystem findByEmail not implemented yet.');
  }

  async incrementFailedLoginAttempts(userId: string): Promise<void> {
    // TODO: Increment failed login attempts in file
    throw new Error('FileSystem incrementFailedLoginAttempts not implemented yet.');
  }
}