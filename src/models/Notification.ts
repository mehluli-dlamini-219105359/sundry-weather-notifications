export class Notification {
    private notificationId: string;
    private userId: string;
    private message: string;
    private type: string;
    private status: string;
    private timestamp: Date;
  
    constructor(id: string, userId: string, msg: string, type: string) {
      this.notificationId = id;
      this.userId = userId;
      this.message = msg;
      this.type = type;
      this.status = 'pending';
      this.timestamp = new Date();
    }
  
    send(): void {
      // Send logic
    }
  
    markAsSent(): void {
      this.status = 'sent';
    }
  
    logDeliveryStatus(): void {
      // Delivery log logic
    }
  }
  