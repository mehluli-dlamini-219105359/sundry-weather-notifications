// User.ts (base)

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
  
  // AdminUser.ts
  import { User } from './User';
  
  export class AdminUser extends User {
    constructor(userId: string, email: string) {
      super(userId, email, 'admin');
    }
  
    resetOtherUserPassword(userId: string) {
      console.log(`Admin resetting password for user: ${userId}`);
    }
  }
  
  // GuestUser.ts
  import { User } from './User';
  
  export class GuestUser extends User {
    constructor(userId: string, email: string) {
      super(userId, email, 'guest');
    }
  
    requestAccess() {
      console.log('Guest requesting access...');
    }
  }
  
  // RegularUser.ts
  import { User } from './User';
  
  export class RegularUser extends User {
    constructor(userId: string, email: string) {
      super(userId, email, 'user');
    }
  
    updatePreferences() {
      console.log('Updating user preferences...');
    }
  }
  
  // UserFactory.ts
  import { AdminUser } from './AdminUser';
  import { GuestUser } from './GuestUser';
  import { RegularUser } from './RegularUser';
  import { User } from './User';
  
  export class UserFactory {
    static createUser(role: string, userId: string, email: string): User {
      switch (role) {
        case 'admin':
          return new AdminUser(userId, email);
        case 'guest':
          return new GuestUser(userId, email);
        case 'user':
        default:
          return new RegularUser(userId, email);
      }
    }
  }
  