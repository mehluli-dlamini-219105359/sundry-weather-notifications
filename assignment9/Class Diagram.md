##     Sundry Weather Notifications Class Diagram 

```mermaid
classDiagram
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
