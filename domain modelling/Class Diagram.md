##  🆕 UPDATED Sundry Weather Notifications Class Diagram 

```mermaid
classDiagram
%% === DOMAIN MODELS ===
class User {
  -userId: String
  -email: String
  -passwordHash: String
  -role: String
  -failedLoginAttempts: Integer
  -preferences: NotificationPreference
  +login()
  +logout()
  +updatePreferences()
  +resetPassword()
}

class NotificationPreference {
  -userId: String
  -alertTypes: List<String>
  -frequency: String
  -channels: List<String>
  -lastUpdated: DateTime
  +update()
  +validateChanges()
}

class WeatherData {
  -weatherId: String
  -location: String
  -temperature: Float
  -condition: String
  -timestamp: DateTime
  +isStale()
  +fetchFromAPI()
  +cache()
  +invalidateCache()
}

class Notification {
  -notificationId: String
  -userId: String
  -message: String
  -type: String
  -status: String
  -timestamp: DateTime
  +send()
  +markAsSent()
  +logDeliveryStatus()
}

class AuthToken {
  -token: String
  -userId: String
  -issuedAt: DateTime
  -expiresAt: DateTime
  +validate()
  +refresh()
  +revoke()
}

class AnalyticsEvent {
  -eventId: String
  -userId: String
  -action: String
  -timestamp: DateTime
  -platform: String
  -metadata: Map
  +logEvent()
  +transform()
  +publishToKafka()
}

class Backup {
  -backupId: String
  -createdAt: DateTime
  -status: String
  -storagePath: String
  +createBackup()
  +restore()
  +verifyIntegrity()
}

%% === REPOSITORY INTERFACES ===
class Repository~T,ID~ {
  <<interface>>
  +findById(id: ID): Promise<T>
  +findAll(): Promise<T[]>
  +save(entity: T): Promise<T>
  +update(entity: T): Promise<T>
  +delete(id: ID): Promise<void>
}

class UserRepository {
  <<interface>>
  +findByEmail(email: String): Promise<User>
  +incrementFailedLoginAttempts(userId: String): Promise<void>
}
Repository <|-- UserRepository

class WeatherDataRepository {
  <<interface>>
  +findRecentByLocation(location: String): Promise<WeatherData[]>
}
Repository <|-- WeatherDataRepository

class NotificationRepository {
  <<interface>>
  +findByUserId(userId: String): Promise<Notification[]>
  +markAllAsSent(userId: String): Promise<void>
}
Repository <|-- NotificationRepository

class NotificationPreferenceRepository {
  <<interface>>
  +findByUserId(userId: String): Promise<NotificationPreference>
}
Repository <|-- NotificationPreferenceRepository

class AuthTokenRepository {
  <<interface>>
  +findValidTokenForUser(userId: String): Promise<AuthToken>
  +revokeAllTokensForUser(userId: String): Promise<void>
}
Repository <|-- AuthTokenRepository

class AnalyticsEventRepository {
  <<interface>>
  +findByUserId(userId: String): Promise<AnalyticsEvent[]>
  +findByAction(action: String): Promise<AnalyticsEvent[]>
}
Repository <|-- AnalyticsEventRepository

class BackupRepository {
  <<interface>>
  +findLatestBackup(): Promise<Backup>
}
Repository <|-- BackupRepository

%% === REPOSITORY IMPLEMENTATIONS (EXAMPLES) ===
class InMemoryUserRepository
UserRepository <|.. InMemoryUserRepository

class InMemoryWeatherDataRepository
WeatherDataRepository <|.. InMemoryWeatherDataRepository

class InMemoryNotificationPreferenceRepository
NotificationPreferenceRepository <|.. InMemoryNotificationPreferenceRepository

%% === CREATIONAL PATTERNS (EXAMPLES) ===
class UserFactory {
  +createUser(role, userId, email): User
}
class AdminUser
User <|-- AdminUser
class GuestUser
User <|-- GuestUser
class RegularUser
User <|-- RegularUser
UserFactory ..> User

class NotificationProcessor {
  <<interface>>
  +send(notification: Notification): void
}
class EmailNotificationProcessor
NotificationProcessor <|.. EmailNotificationProcessor
class SMSNotificationProcessor
NotificationProcessor <|.. SMSNotificationProcessor

class AlertFactory {
  <<interface>>
  +createNotification(userId, message): Notification
  +createPreference(): NotificationPreference
}
class MobileAlertFactory
AlertFactory <|.. MobileAlertFactory
class WebAlertFactory
AlertFactory <|.. WebAlertFactory

class WeatherReportBuilder {
  +setLocation()
  +setTemperature()
  +setCondition()
  +setHumidity()
  +setWindSpeed()
  +build(): WeatherReport
}
class WeatherReport

class ClonableUser {
  +clone(): ClonableUser
}
class UserPrototypeCache {
  +load()
  +getPrototype(type): ClonableUser
}
UserPrototypeCache ..> ClonableUser

class AnalyticsLogger {
  -instance: AnalyticsLogger
  +getInstance(): AnalyticsLogger
  +log(event: AnalyticsEvent): void
}

%% === RELATIONSHIPS ===
User "1" -- "1" NotificationPreference : configures
User "1" -- "0..*" Notification : receives
User "1" -- "0..*" AnalyticsEvent : generates
User "1" -- "0..*" AuthToken : owns
WeatherData "1" -- "0..*" Notification : triggers
Notification "1" -- "1" User : sentTo
Notification "1" -- "1" NotificationPreference : filteredBy
Backup "1" -- "1" User : triggeredBy
```

**Design Choices:** 
- Each class includes relevant business logic through methods—for example, Notification.send() supports time-critical delivery, while AnalyticsEvent.publishToKafka() integrates with the app’s real-time tracking pipeline.
- Modularity and separation of concerns by assigning each class a specific responsibility.
  User handles authentication, session control, and preference management.
  NotificationPreference is composed within User, reflecting a tightly bound configuration that should not exist independently.

- Multiplicity captures real-world behavior:
Users can have multiple AuthTokens (for different sessions or devices), and receive many Notifications.
The WeatherData class is designed to trigger alerts for multiple users.

The Security is addressed through the AuthToken validation and role-based access control (RBAC) notes on the User class.
