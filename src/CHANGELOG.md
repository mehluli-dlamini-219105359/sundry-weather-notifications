# Changelog

issue found [Imports BUG](https://github.com/mehluli-dlamini-219105359/sundry-weather-notifications/issues/18)

## [v1.1.0] - 2025-04-20

### 🆕 Added
- Introduced unit tests for all creational design patterns:
  - `SimpleFactory`
  - `FactoryMethod`
  - `AbstractFactory`
  - `Builder`
  - `Prototype`
  - `Singleton`
- Created `/tests` directory with the following structure:


- Example test cases added for:
- Object creation and attribute validation
- Edge case handling (e.g., missing builder inputs, singleton uniqueness)

### 🛠️ Changed 
- **`User.ts`** class was moved out of `UserFactory.ts` to resolve circular import issues and eliminate `"Cannot find module './User'"` error.
- Updated `jest.config.js` to correct multiple export conflict and apply `ts-jest` transform for `.ts`/`.tsx` files:
```js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {}],
  },
};

### ✅ REST API Features Implemented

Organized and routed controller-based features under the `/api` folder:

### Notification Endpoints
- `POST /api/notifications`: Send a notification to a user.
- `GET /api/notifications/:userId`: Fetch notifications for a user.
- `POST /api/notifications/:userId/mark-sent`: Mark all user notifications as sent.

### Notification Preferences
- `GET /api/preferences/:userId`: Retrieve a user's notification preferences.

### User Management
- `POST /api/users/:userId/increment-failed-login`: Increment failed login attempts.

### Analytics
- `GET /api/analytics/user/:userId`: Fetch analytics for a user.
- `GET /api/analytics/action/:action`: Fetch analytics events by action.

### Weather Data
- `GET /api/weather/:location`: Retrieve recent weather data for a specific location.

---

## Tests

- Test files were written in a dedicated `tests/` folder using **Supertest** with **Jest**.
- All endpoint routes were covered with integration tests.
- Valid and invalid request scenarios were tested, including:
  - Successful requests returning `200 OK`
  - Missing parameters resulting in `400` or `404` errors

---

##  OpenAPI Documentation

- A full OpenAPI 3.0.3 spec was created in `openapi.yaml`.
- Descriptions, parameters, request/response schemas, and common error codes were defined for every endpoint.
- The spec is ready for integration with Swagger UI, Postman, or ReDoc.

