```mermaid
@startuml
rectangle "Sundry Notification System" {
    actor User
    actor "Authentication Service" as AuthService
    actor "Weather API" as WeatherAPI
    actor "Notification Service" as Notification
    actor "User Analytics" as Analytics
    actor "Logging & Monitoring Service" as Logging

    rectangle "Frontend (Web/Mobile App)" {
        usecase "Sign in to App" as UC1
    }

    rectangle "Backend API" {
        usecase "Fetch Weather Data" as UC2
        usecase "Retrieve User Preferences" as UC3
        usecase "Track User Activity" as UC5
        usecase "Monitor System Logs" as UC6
    }

    rectangle "Notification System" {
        usecase "Send Notifications" as UC4
    }
}

User -- UC1
UC1 -- AuthService

UC2 -- WeatherAPI
UC3 -- Backend

Notification -- UC4
UC4 -- User

Analytics -- UC5
Backend -- UC5

Logging -- UC6
Backend -- UC6
@enduml
```
