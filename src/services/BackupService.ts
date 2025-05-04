import { BackupRepository } from '../repositories/BackupRepository';

export class BackupService {
  constructor(private backupRepo: BackupRepository) {}

  async getLatestBackup() {
    return await this.backupRepo.findLatestBackup();
  }
}