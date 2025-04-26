import { BackupRepository } from '../../repositories/BackupRepository';
import { Backup } from '../../models/Backup';

export class InMemoryBackupRepository implements BackupRepository {
  private store: Map<string, Backup> = new Map();

  async save(entity: Backup): Promise<Backup> {
    if (!entity.userId || typeof entity.userId !== 'string') {
      throw new Error('Invalid Backup: userId must be a non-empty string.');
    }
    this.store.set(entity.userId, entity);
    return entity;
  }

  async update(entity: Backup): Promise<Backup> {
    if (!entity.userId || typeof entity.userId !== 'string') {
      throw new Error('Invalid Backup: userId must be a non-empty string.');
    }
    if (!this.store.has(entity.id)) {
      throw new Error(`Backup with userId "${entity.userId}" does not exist.`);
    }
    this.store.set(entity.userId, entity);
    return entity;
  }

  async findById(id: string): Promise<Backup | null> {
    return this.store.get(id) || null;
  }

  async delete(id: string): Promise<void> {
    if (!this.store.has(id)) {
      throw new Error(`Backup with userId "${id}" does not exist.`);
    }
    this.store.delete(id);
  }

  async findAll(): Promise<Backup[]> {
    return Array.from(this.store.values());
  }

  async findLatestBackup(): Promise<Backup | null> {
    let latest: Backup | null = null;
    for (const backup of this.store.values()) {
      const backupCreatedAt = new Date(backup.createdAt); // Assuming `createdAt` is a string or Date
      if (!latest || backupCreatedAt > new Date(latest.createdAt)) {
        latest = backup;
      }
    }
    return latest;
  }
}