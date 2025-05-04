import express from 'express';
import { NotificationService } from '../../services/NotificationService';
import { NotificationPreferenceService } from '../../services/NotificationPreferenceService';
import { UserService } from '../../services/UserService';
import { AuthTokenService } from '../../services/AuthTokenService';
import { AnalyticsEventService } from '../../services/AnalyticsEventService';
import { WeatherDataService } from '../../services/WeatherDataService';
import { BackupService } from '../../services/BackupService';

const mockRepo = () => ({
  findByUserId: async (id: string) => [],
  findByAction: async (action: string) => [],
  findByEmail: async (email: string) => null,
  incrementFailedLoginAttempts: async (id: string) => {},
  findValidTokenForUser: async (id: string) => null,
  revokeAllTokensForUser: async (id: string) => {},
  findRecentByLocation: async (location: string) => [],
  findLatestBackup: async () => null,
  markAllAsSent: async (id: string) => {},
  save: async (entity: any) => entity,
  findById: async (id: string) => null,
  findAll: async () => [],
  update: async (entity: any) => entity,
  delete: async (id: string) => {},
});

const notificationService = new NotificationService(mockRepo(), mockRepo());
const notificationPrefService = new NotificationPreferenceService(mockRepo());
const userService = new UserService(mockRepo());
const authTokenService = new AuthTokenService(mockRepo());
const analyticsService = new AnalyticsEventService(mockRepo());
const weatherService = new WeatherDataService(mockRepo());
const backupService = new BackupService(mockRepo());

const router = express.Router();

// Middleware to inject services into req for controllers
router.use((req, res, next) => {
  req.services = {
    notificationService,
    notificationPrefService,
    userService,
    authTokenService,
    analyticsService,
    weatherService,
    backupService,
  };
  next();
});

import { NotificationController } from '../controllers/NotificationController';
import { NotificationPreferenceController } from '../controllers/NotificationPreferenceController';
import { UserController } from '../controllers/UserController';
import { AuthTokenController } from '../controllers/AuthTokenController';
import { AnalyticsEventController } from '../controllers/AnalyticsEventController';
import { WeatherDataController } from '../controllers/WeatherDataController';
import { BackupController } from '../controllers/BackupController';

router.post('/notifications', NotificationController.sendNotification);

router.get('/notifications/:userId', NotificationController.getUserNotifications);

router.post('/notifications/:userId/mark-sent', NotificationController.markAllNotificationsAsSent);

router.get('/preferences/:userId', NotificationPreferenceController.getPreference);

router.get('/users/email/:email', UserController.findUserByEmail);

router.post('/users/:userId/increment-failed-login', UserController.incrementFailedLogins);

router.get('/tokens/:userId', AuthTokenController.getValidToken);

router.post('/tokens/:userId/revoke', AuthTokenController.revokeUserTokens);

router.get('/analytics/user/:userId', AnalyticsEventController.getEventsByUser);

router.get('/analytics/action/:action', AnalyticsEventController.getEventsByAction);

router.get('/weather/:location', WeatherDataController.getRecentWeather);

router.get('/backups/latest', BackupController.getLatestBackup);

export default router;