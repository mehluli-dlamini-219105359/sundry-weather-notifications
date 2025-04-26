// src/repositories/database/DatabaseUserRepository.ts

import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../models/User';

export class DatabaseUserRepository implements UserRepository {
  constructor(private dbConnection: any) {
    // `dbConnection` could be a Mongo client, Postgres client, Prisma, Sequelize, etc.
  }

  async save(entity: User): Promise<User> {
    // TODO: Insert user into the database
    throw new Error('Database save not implemented yet.');
  }

  async findById(id: string): Promise<User | null> {
    // TODO: Query user by ID from database
    throw new Error('Database findById not implemented yet.');
  }

  async findAll(): Promise<User[]> {
    // TODO: Query all users from database
    throw new Error('Database findAll not implemented yet.');
  }

  async update(entity: User): Promise<User> {
    // TODO: Update user in database
    throw new Error('Database update not implemented yet.');
  }

  async delete(id: string): Promise<void> {
    // TODO: Delete user from database
    throw new Error('Database delete not implemented yet.');
  }

  async findByEmail(email: string): Promise<User | null> {
    // TODO: Query user by email
    throw new Error('Database findByEmail not implemented yet.');
  }

  async incrementFailedLoginAttempts(userId: string): Promise<void> {
    // TODO: Increment failed login attempts in database
    throw new Error('Database incrementFailedLoginAttempts not implemented yet.');
  }
}