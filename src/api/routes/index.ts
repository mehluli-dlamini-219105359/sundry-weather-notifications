import express from 'express';
import { NotificationController } from '../controllers/NotificationController';
import { NotificationPreferenceController } from '../controllers/NotificationPreferenceController';
import { UserController } from '../controllers/UserController';
import { AuthTokenController } from '../controllers/AuthTokenController';
import { AnalyticsEventController } from '../controllers/AnalyticsEventController';
import { WeatherDataController } from '../controllers/WeatherDataController';
import { BackupController } from '../controllers/BackupController';

const router = express.Router();

// Mocked repo factory for testing purposes
const mockRepo = () => ({
  findByUserId: async () => [],
  findByAction: async () => [],
  findByEmail: async () => null,
  incrementFailedLoginAttempts: async () => {},
  findValidTokenForUser: async () => null,
  revokeAllTokensForUser: async () => {},
  findRecentByLocation: async () => [],
  findLatestBackup: async () => null,
  markAllAsSent: async () => {},
  save: async (entity: any) => entity,
  findById: async () => null,
  findAll: async () => [],
  update: async (entity: any) => entity,
  delete: async () => {},
});

// Services
import { NotificationService } from '../../services/NotificationService';
import { NotificationPreferenceService } from '../../services/NotificationPreferenceService';
import { UserService } from '../../services/UserService';
import { AuthTokenService } from '../../services/AuthTokenService';
import { AnalyticsEventService } from '../../services/AnalyticsEventService';
import { WeatherDataService } from '../../services/WeatherDataService';
import { BackupService } from '../../services/BackupService';

const services = {
  notificationService: new NotificationService(mockRepo(), mockRepo()),
  notificationPrefService: new NotificationPreferenceService(mockRepo()),
  userService: new UserService(mockRepo()),
  authTokenService: new AuthTokenService(mockRepo()),
  analyticsService: new AnalyticsEventService(mockRepo()),
  weatherService: new WeatherDataService(mockRepo()),
  backupService: new BackupService(mockRepo()),
};

// Inject services into request
router.use((req, res, next) => {
  req.services = services;
  next();
});

// -------------------- Notification --------------------
router.post('/api/notifications', NotificationController.sendNotification);
router.get('/api/notifications/:userId', NotificationController.getUserNotifications);
router.post('/api/notifications/:userId/mark-sent', NotificationController.markAllNotificationsAsSent);

// -------------------- Notification Preferences --------------------
router.get('/api/preferences/:userId', NotificationPreferenceController.getPreference);

// -------------------- User --------------------
router.post('/api/users/:userId/increment-failed-login', UserController.incrementFailedLogins);

// -------------------- Analytics --------------------
router.get('/api/analytics/user/:userId', AnalyticsEventController.getEventsByUser);
router.get('/api/analytics/action/:action', AnalyticsEventController.getEventsByAction);

// -------------------- Weather --------------------
router.get('/api/weather/:location', WeatherDataController.getRecentWeather);

// -------------------- Backup --------------------
//router.get('/api/backups/latest', BackupController.getLatestBackup);
//router.get('/api/backups/:location', BackupController.getBackupsByLocation);
//router.get('/api/backups/:location/:date', BackupController.getBackupByLocationAndDate);

export default router;