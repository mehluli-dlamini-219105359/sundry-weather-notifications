export class AuthToken {
    private token: any;
    private userId: string;
    private issuedAt: Date;
    private expiresAt: Date;
  
    constructor(token: string, userId: string, ttlMinutes: number) {
      this.token = token;
      this.userId = userId;
      this.issuedAt = new Date();
      this.expiresAt = new Date(Date.now() + ttlMinutes * 60000);
    }
  
    validate(): boolean {
      return Date.now() < this.expiresAt.getTime();
    }
  
    refresh(ttlMinutes: number): void {
      this.issuedAt = new Date();
      this.expiresAt = new Date(Date.now() + ttlMinutes * 60000);
    }
  
    revoke(): void {
      this.expiresAt = new Date(0);
    }
  }
  