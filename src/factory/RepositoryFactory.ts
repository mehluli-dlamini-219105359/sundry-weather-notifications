// src/factories/RepositoryFactory.ts

import { UserRepository } from '../repositories/UserRepository';
import { InMemoryUserRepository } from '../repositories/inmemory/InMemoryUserRepository';

import { BackupRepository } from '../repositories/BackupRepository';
import { InMemoryBackupRepository } from '../repositories/inmemory/InMemoryBackUpRepository';

import { NotificationPreferenceRepository } from '../repositories/NotificationPreferenceRepository';
import { InMemoryNotificationPreferenceRepository } from '../repositories/inmemory/InMemoryNotificationPreferenceRepository';

import { WeatherDataRepository } from '../repositories/WeatherDataRepository';
import { InMemoryWeatherDataRepository } from '../repositories/inmemory/InMemoryWeatherDataRepository';

export class RepositoryFactory {
  static userRepository(): UserRepository {
    return new InMemoryUserRepository();
  }

  static backupRepository(): BackupRepository {
    return new InMemoryBackupRepository();
  }

  static notificationPreferenceRepository(): NotificationPreferenceRepository {
    return new InMemoryNotificationPreferenceRepository();
  }

  static weatherDataRepository(): WeatherDataRepository {
    return new InMemoryWeatherDataRepository();
  }
}
