import { NotificationService } from '@/services/NotificationService';
import { NotificationPreferenceService } from '@/services/NotificationPreferenceService';
import { UserService } from '@/services/UserService';
import { AuthTokenService } from '@/services/AuthTokenService';
import { AnalyticsEventService } from '@/services/AnalyticsEventService';
import { WeatherDataService } from '@/services/WeatherDataService';
import { BackupService } from '@/services/BackupService';

// Mocks
const mockRepo = () => ({
  findByUserId: jest.fn(),
  findByAction: jest.fn(),
  findByEmail: jest.fn(),
  incrementFailedLoginAttempts: jest.fn(),
  findValidTokenForUser: jest.fn(),
  revokeAllTokensForUser: jest.fn(),
  findRecentByLocation: jest.fn(),
  findLatestBackup: jest.fn(),
  save: jest.fn(),
  markAllAsSent: jest.fn(),
});

describe('Service Layer Tests', () => {
  const notificationRepo = mockRepo();
  const preferenceRepo = mockRepo();
  const userRepo = mockRepo();
  const tokenRepo = mockRepo();
  const analyticsRepo = mockRepo();
  const weatherRepo = mockRepo();
  const backupRepo = mockRepo();

  // Instantiate all services
  const notificationService = new NotificationService(notificationRepo, preferenceRepo);
  const notificationPrefService = new NotificationPreferenceService(preferenceRepo);
  const userService = new UserService(userRepo);
  const authTokenService = new AuthTokenService(tokenRepo);
  const analyticsEventService = new AnalyticsEventService(analyticsRepo);
  const weatherService = new WeatherDataService(weatherRepo);
  const backupService = new BackupService(backupRepo);

  it('should send a notification if user preference is enabled', async () => {
    preferenceRepo.findByUserId.mockResolvedValue({ enabled: true });
    notificationRepo.save.mockResolvedValue({ id: '1', userId: 'u1', message: 'Hello' });

    const result = await notificationService.sendNotification('u1', 'Hello');

    expect(preferenceRepo.findByUserId).toHaveBeenCalled();
    expect(notificationRepo.save).toHaveBeenCalled();
    expect(result?.message).toBe('Hello');
  });

  it('should get user preferences', async () => {
    // Adjust the mock and assertion to use a property that exists on NotificationPreference
    preferenceRepo.findByUserId.mockResolvedValue({ receiveEmails: false });

    const result = await notificationPrefService.getPreference('u1');
    expect(result?.receiveEmails).toBe(false);
  });

  it('should increment failed login attempts', async () => {
    await userService.incrementFailedLogins('u1');
    expect(userRepo.incrementFailedLoginAttempts).toHaveBeenCalledWith('u1');
  });

  it('should get a valid auth token', async () => {
    tokenRepo.findValidTokenForUser.mockResolvedValue({ token: 'abc123' });

    const result = await authTokenService.getValidToken('u1');
    expect(result?.getToken()).toBe('abc123');
  });

  it('should get analytics events by user', async () => {
    analyticsRepo.findByUserId.mockResolvedValue([{ action: 'click' }]);

    const result = await analyticsEventService.getEventsByUser('u1');
    expect(result.length).toBe(1);
  });

  it('should get recent weather data by location', async () => {
    weatherRepo.findRecentByLocation.mockResolvedValue([{ temperature: 20 }]);

    const result = await weatherService.getRecentWeather('Cape Town');
    expect(result[0].temperature).toBe(20);
  });

  it('should fetch latest backup', async () => {
    backupRepo.findLatestBackup.mockResolvedValue({ createdAt: new Date() });

    const result = await backupService.getLatestBackup();
    expect(result).toHaveProperty('createdAt');
  });
});