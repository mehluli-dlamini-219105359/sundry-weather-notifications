// Notification.ts (base model)
export class Notification {
    constructor(
      public userId: string,
      public message: string,
      public type: string = 'generic'
    ) {}
  }
  
  // NotificationProcessor.ts (interface)
  import { Notification } from './Notification';
  
  export interface NotificationProcessor {
    send(notification: Notification): void;
  }
  
  // EmailNotificationProcessor.ts
  import { Notification } from './Notification';
  import { NotificationProcessor } from './NotificationProcessor';
  
  export class EmailNotificationProcessor implements NotificationProcessor {
    send(notification: Notification): void {
      console.log(`Sending email to user ${notification.userId}: ${notification.message}`);
    }
  }
  
  // SMSNotificationProcessor.ts
  import { Notification } from './Notification';
  import { NotificationProcessor } from './NotificationProcessor';
  
  export class SMSNotificationProcessor implements NotificationProcessor {
    send(notification: Notification): void {
      console.log(`Sending SMS to user ${notification.userId}: ${notification.message}`);
    }
  }
  