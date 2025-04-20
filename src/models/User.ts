import { NotificationPreference } from './NotificationPreference';

export class User {
  private userId: string;
  private email: string;
  private passwordHash: string;
  private role: string;
  private failedLoginAttempts: number;
  private preferences: NotificationPreference;

  constructor(userId: string, email: string, passwordHash: string, role: string) {
    this.userId = userId;
    this.email = email;
    this.passwordHash = passwordHash;
    this.role = role;
    this.failedLoginAttempts = 0;
    this.preferences = new NotificationPreference(userId);
  }

  login(): void {
    // Login logic
  }

  logout(): void {
    // Logout logic
  }

  updatePreferences(newPrefs: NotificationPreference): void {
    this.preferences = newPrefs;
  }

  resetPassword(): void {
    // Reset logic
  }
}
