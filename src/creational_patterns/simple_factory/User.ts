export class User {
    constructor(
      public userId: string,
      public email: string,
      public role: string
    ) {}
  
    login() {
      console.log(`[${this.role}] User ${this.email} logged in.`);
    }
  }