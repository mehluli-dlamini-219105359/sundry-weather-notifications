export class NotificationPreference {
    private userId: string;
    private alertTypes: string[];
    private frequency: string;
    private channels: string[];
    private lastUpdated: Date;
  
    constructor(userId: string) {
      this.userId = userId;
      this.alertTypes = [];
      this.frequency = 'daily';
      this.channels = ['email'];
      this.lastUpdated = new Date();
    }
  
    update(prefs: Partial<NotificationPreference>): void {
      Object.assign(this, prefs);
      this.lastUpdated = new Date();
    }
  
    validateChanges(): boolean {
      return true;
    }
  }
  