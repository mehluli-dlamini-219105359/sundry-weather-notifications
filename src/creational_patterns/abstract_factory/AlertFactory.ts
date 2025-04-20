// NotificationPreference.ts
export class NotificationPreference {
    constructor(
      public frequency: string,
      public channels: string[]
    ) {}
  }
  
  // AlertFactory.ts (interface)
  import { Notification } from './Notification';
  import { NotificationPreference } from './NotificationPreference';
  
  export interface AlertFactory {
    createNotification(userId: string, message: string): Notification;
    createPreference(): NotificationPreference;
  }
  
  // MobileAlertFactory.ts
  import { AlertFactory } from './AlertFactory';
  import { Notification } from './Notification';
  import { NotificationPreference } from './NotificationPreference';
  
  export class MobileAlertFactory implements AlertFactory {
    createNotification(userId: string, message: string): Notification {
      return new Notification(userId, `[Mobile] ${message}`, 'push');
    }
  
    createPreference(): NotificationPreference {
      return new NotificationPreference('immediate', ['push', 'sms']);
    }
  }
  
  // WebAlertFactory.ts
  import { AlertFactory } from './AlertFactory';
  import { Notification } from './Notification';
  import { NotificationPreference } from './NotificationPreference';
  
  export class WebAlertFactory implements AlertFactory {
    createNotification(userId: string, message: string): Notification {
      return new Notification(userId, `[Web] ${message}`, 'email');
    }
  
    createPreference(): NotificationPreference {
      return new NotificationPreference('daily', ['email']);
    }
  }
  