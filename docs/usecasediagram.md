```mermaid
usecaseDiagram
    actor User as U
    actor "Authentication Service" as AuthService
    actor "Weather API" as WeatherAPI
    actor "Notification Service" as Notification
    actor "User Analytics" as Analytics
    actor "Logging & Monitoring Service" as Logging

    rectangle "Sundry Notification System" {
        rectangle "Frontend (Web/Mobile App)" {
            U -- UC1: "Sign in to App"
        }
        
        rectangle "Backend API" {
            UC2: "Fetch Weather Data"
            UC3: "Retrieve User Preferences"
            UC5: "Track User Activity"
            UC6: "Monitor System Logs"
            
            UC2 -- WeatherAPI: "Fetches Weather Data"
            UC3 -- UC3: "Interacts with Backend"
            Analytics -- UC5: "Tracks User Activity"
            Logging -- UC6: "Handles Logs"
        }
        
        rectangle "Notification System" {
            UC4: "Send Notifications"
            U -- UC4: "Receives Notifications"
        }
    }
```
