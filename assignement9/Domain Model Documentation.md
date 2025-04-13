# Domain Model for Sundry Notification Weather Project 

- A **domain model** is a conceptual representation of key entities, attributes, and relationships within a specific area of knowledge relevant to a software application.
  It serves as a blueprint for understanding and communicating the core concepts of the business or problem domain.

## 1. Domain Entities 

| Entity               | Attributes                                                                 | Methods                                                                                 | Relationships                                                   |
|----------------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| User                 | id, email, passwordHash, role, failedLoginAttempts, preferences            | login(), logout(), updatePreferences(), resetPassword()                                 | Authenticates via AuthenticationService; has NotificationPreferences |
| WeatherData          | id, location, temperature, condition, timestamp                            | isStale(), fetchFromAPI(), cache(), invalidateCache()                                   | Retrieved via WeatherAPI; cached in Cache                       |
| Notification         | id, userId, message, type, status, timestamp                               | send(), markAsSent(), logDeliveryStatus()                                               | Sent to User; delivered via NotificationService                 |
| NotificationPreference | userId, alertTypes[], frequency, channels[], lastUpdated                  | update(), validateChanges()                                                             | Belongs to User; stored in Database                             |
| AuthToken            | token, userId, issuedAt, expiresAt                                         | validate(), refresh(), revoke()                                                         | Issued by AuthenticationService                                 |
| AnalyticsEvent       | eventId, userId, action, timestamp, platform, metadata                     | logEvent(), transform(), publishToKafka()                                               | Ingested by Analytics Pipeline                                  |
| Backup               | backupId, createdAt, status, storagePath                                   | createBackup(), restore(), verifyIntegrity()                                            | Related to Database                                              |

---

## 2. Business Rules

- **Authentication**
  - A user receives an auth token upon successful login.
  - After 5 failed login attempts, further attempts are rate-limited.

- **Weather Data & Caching**
  - Cached weather data expires every 15 minutes.
  - If the external Weather API is unavailable, fallback to the last cached data.

- **Notification Preferences**
  - Users can opt in/out of specific weather alerts.
  - Preference changes must propagate to the database within 5 seconds.

- **Push Notifications**
  - High-priority notifications must be sent within 10 seconds of detection.
  - All notification deliveries must be logged (Datadog/AnalyticsService).

- **RBAC (Role-Based Access Control)**
  - Product Manager: Can modify global notification settings.
  - DevOps Engineer: Can access logs and performance metrics.
  - Database Admin: Can manage user data and schemas.
  - Unauthorized access attempts trigger alerts and are logged.

- **Analytics & Logging**
  - User actions are published to Kafka within 2 seconds of occurrence.
  - All logs should be queryable within 5 seconds of being generated.

- **Database Backups**
  - Backups occur automatically via AWS RDS.
  - Restoration tests must be run monthly to verify integrity.

---

## The relationships are highlighted below.

- A **User** has **NotificationPreferences**.
- **WeatherData** is **retrieved** via **WeatherAPI** and **stored** in **Cache**.
- A **Notification** is sent to a **User** and its status is logged in **Analytics**.
- **AnalyticsEvent** relates to a **User** and is **pushed** through the **Analytics pipeline**.
- **Backup** is associated with **Database**, ensuring data safety and integrity.
