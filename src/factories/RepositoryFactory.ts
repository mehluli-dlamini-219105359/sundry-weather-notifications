// src/factories/RepositoryFactory.ts

// In-memory Repositories
import { InMemoryUserRepository } from '../repositories/inmemory/InMemoryUserRepository';
import { InMemoryBackupRepository } from '../repositories/inmemory/InMemoryBackUpRepository';
import { InMemoryNotificationPreferenceRepository } from '../repositories/inmemory/InMemoryNotificationPreferenceRepository';
import { InMemoryWeatherDataRepository } from '../repositories/inmemory/InMemoryWeatherDataRepository';
import { DatabaseUserRepository } from '../repositories/database/DatabaseUserRepository';
// Interfaces
import { UserRepository } from '../repositories/UserRepository';
import { BackupRepository } from '../repositories/BackupRepository';
import { NotificationPreferenceRepository } from '../repositories/NotificationPreferenceRepository';
import { WeatherDataRepository } from '../repositories/WeatherDataRepository';

// (Future database repositories)
// import { DatabaseUserRepository } from '../repositories/database/DatabaseUserRepository';
// import { DatabaseBackupRepository } from '../repositories/database/DatabaseBackupRepository';
// etc.

export class RepositoryFactory {
  private static readonly STORAGE_TYPE = process.env.STORAGE_TYPE || 'MEMORY';

  private static unsupportedError(repoName: string): never {
    throw new Error(`Unsupported STORAGE_TYPE for ${repoName}: ${this.STORAGE_TYPE}`);
  }

  static userRepository(): UserRepository {
    switch (this.STORAGE_TYPE) {
      case 'MEMORY':
        return new InMemoryUserRepository();
      // case 'DATABASE':
      //   return new DatabaseUserRepository(databaseConnection); // Uncomment when implemented
      default:
        return this.unsupportedError('UserRepository');
    }
  }

  static backupRepository(): BackupRepository {
    switch (this.STORAGE_TYPE) {
      case 'MEMORY':
        return new InMemoryBackupRepository();
      // case 'DATABASE':
      //   return new DatabaseBackupRepository(databaseConnection);
      default:
        return this.unsupportedError('BackupRepository');
    }
  }

  static notificationPreferenceRepository(): NotificationPreferenceRepository {
    switch (this.STORAGE_TYPE) {
      case 'MEMORY':
        return new InMemoryNotificationPreferenceRepository();
      // case 'DATABASE':
      //   return new DatabaseNotificationPreferenceRepository(databaseConnection);
      default:
        return this.unsupportedError('NotificationPreferenceRepository');
    }
  }

  static weatherDataRepository(): WeatherDataRepository {
    switch (this.STORAGE_TYPE) {
      case 'MEMORY':
        return new InMemoryWeatherDataRepository();
      // case 'DATABASE':
      //   return new DatabaseWeatherDataRepository(databaseConnection);
      default:
        return this.unsupportedError('WeatherDataRepository');
    }
  }
  // static userRepository(): UserRepository {
  //   switch (this.STORAGE_TYPE) {
  //     case 'MEMORY':
  //       return new InMemoryUserRepository();
  //     case 'DATABASE':
  //       return new DatabaseUserRepository(databaseConnection); // <- You pass the DB connection here!
  //     case 'FILESYSTEM':
  //       return new FileSystemUserRepository('./data/users.json');
  //     default:
  //       return this.unsupportedError('UserRepository');
  //   }
  // }
}