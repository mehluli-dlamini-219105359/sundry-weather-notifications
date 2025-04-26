// src/domain/repositories/BackupRepository.ts

import { Repository } from './Repository';
import { Backup } from '../models/Backup';

export interface BackupRepository extends Repository<Backup, string> {
  findLatestBackup(): Promise<Backup | null>;
}