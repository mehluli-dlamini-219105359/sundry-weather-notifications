// src/factories/RepositoryFactory.ts

import { UserRepository } from '../repositories/UserRepository';
import { InMemoryUserRepository } from '../repositories/inmemory/InMemoryUserRepository';
// import { MongoUserRepository } from '../repositories/mongo/MongoUserRepository'; // future

import { BackupRepository } from '../repositories/BackupRepository';
import { InMemoryBackupRepository } from '../repositories/inmemory/InMemoryBackUpRepository';

import { NotificationPreferenceRepository } from '../repositories/NotificationPreferenceRepository';
import { InMemoryNotificationPreferenceRepository } from '../repositories/inmemory/InMemoryNotificationPreferenceRepository';

import { WeatherDataRepository } from '../repositories/WeatherDataRepository';
import { InMemoryWeatherDataRepository } from '../repositories/inmemory/InMemoryWeatherDataRepository';

export class RepositoryFactory {
  private static readonly STORAGE_TYPE = process.env.STORAGE_TYPE || 'MEMORY';

  static userRepository(): UserRepository {
    switch (this.STORAGE_TYPE) {
      case 'MEMORY':
        return new InMemoryUserRepository();
      // case 'DATABASE':
      //   return new MongoUserRepository(); // Uncomment when implemented
      default:
        throw new Error(`Unsupported STORAGE_TYPE for UserRepository: ${this.STORAGE_TYPE}`);
    }
  }

  static backupRepository(): BackupRepository {
    switch (this.STORAGE_TYPE) {
      case 'MEMORY':
        return new InMemoryBackupRepository();
      default:
        throw new Error(`Unsupported STORAGE_TYPE for BackupRepository: ${this.STORAGE_TYPE}`);
    }
  }

  static notificationPreferenceRepository(): NotificationPreferenceRepository {
    switch (this.STORAGE_TYPE) {
      case 'MEMORY':
        return new InMemoryNotificationPreferenceRepository();
      default:
        throw new Error(`Unsupported STORAGE_TYPE for NotificationPreferenceRepository: ${this.STORAGE_TYPE}`);
    }
  }

  static weatherDataRepository(): WeatherDataRepository {
    switch (this.STORAGE_TYPE) {
      case 'MEMORY':
        return new InMemoryWeatherDataRepository();
      default:
        throw new Error(`Unsupported STORAGE_TYPE for WeatherDataRepository: ${this.STORAGE_TYPE}`);
    }
  }
}
