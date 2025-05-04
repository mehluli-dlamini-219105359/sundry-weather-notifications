import request from 'supertest';
import express from 'express';
import router from '../api/routes/index';

const app = express();
app.use(express.json());
app.use(router);

describe('API Routes', () => {
  describe('POST /api/notifications', () => {
    it('should return 200 when sending a notification', async () => {
      const res = await request(app)
        .post('/api/notifications')
        .send({ userId: 'test-user', message: 'Hello World' });
      expect(res.statusCode).toBe(200);
    });
  });

  describe('GET /api/notifications/:userId', () => {
    it('should return 200 and an array', async () => {
      const res = await request(app).get('/api/notifications/test-user');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe('POST /api/notifications/:userId/mark-sent', () => {
    it('should return 200 when marking notifications as sent', async () => {
      const res = await request(app).post('/api/notifications/test-user/mark-sent');
      expect(res.statusCode).toBe(200);
    });
  });

  describe('GET /api/preferences/:userId', () => {
    it('should return 200 for user preferences', async () => {
      const res = await request(app).get('/api/preferences/test-user');
      expect(res.statusCode).toBe(200);
    });
  });

  describe('POST /api/users/:userId/increment-failed-login', () => {
    it('should return 200 for incrementing failed login', async () => {
      const res = await request(app).post('/api/users/test-user/increment-failed-login');
      expect(res.statusCode).toBe(200);
    });
  });

  describe('GET /api/analytics/user/:userId', () => {
    it('should return 200 for analytics events by user', async () => {
      const res = await request(app).get('/api/analytics/user/test-user');
      expect(res.statusCode).toBe(200);
    });
  });

  describe('GET /api/analytics/action/:action', () => {
    it('should return 200 for analytics events by action', async () => {
      const res = await request(app).get('/api/analytics/action/test-action');
      expect(res.statusCode).toBe(200);
    });
  });

  describe('GET /api/weather/:location', () => {
    it('should return 200 for weather data', async () => {
      const res = await request(app).get('/api/weather/test-location');
      expect(res.statusCode).toBe(200);
    });
  });
});