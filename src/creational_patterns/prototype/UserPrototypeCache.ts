// ClonableUser.ts
export class ClonableUser {
    constructor(
      public userId: string,
      public email: string,
      public role: string
    ) {}
  
    clone(): ClonableUser {
      return new ClonableUser(this.userId, this.email, this.role);
    }
  }
  
  // UserPrototypeCache.ts
  import { ClonableUser } from './ClonableUser';
  
  export class UserPrototypeCache {
    private static prototypes: Map<string, ClonableUser> = new Map();
  
    static load() {
      this.prototypes.set('guest', new ClonableUser('GUEST-001', 'guest@example.com', 'guest'));
      this.prototypes.set('admin', new ClonableUser('ADMIN-001', 'admin@example.com', 'admin'));
    }
  
    static getPrototype(type: string): ClonableUser | undefined {
      const prototype = this.prototypes.get(type);
      return prototype?.clone();
    }
  }
  