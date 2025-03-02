%% C4 Component Diagram
C4Component
    title Sundry Notification Beta - Component View

    Person(user, "User", "Opens/Signs into App")

    System_Boundary(weatherApp, "Sundry Notifications Boundary") {
        Container(webApp, "Web/Mobile App", "React/Flutter", "Displays weather updates and user preferences")
        Container(backend, "Backend API", "Flask/Node.js", "Handles business logic and data processing")
        ContainerDb(database, "Database", "PostgreSQL/Firebase", "Stores user preferences and notification history")
        Container(cache, "Cache", "Redis/Memcached", "Caches weather data for faster response times")
        Container(notificationService, "Notification Service", "Manages push, email, and SMS alerts")
        Container(userAnalytics, "User Analytics", "Tracks user activity for insights")
        Container(loggingService, "Logging & Monitoring", "Handles logs, errors, and system performance")
    }

    System_Ext(weatherAPI, "Weather API", "OpenWeatherMap", "Provides real-time weather data")
    System_Ext(authService, "Authentication Service", "Firebase Auth/OAuth", "Handles user authentication")

    Rel(user, webApp, "Opens App")
    Rel(user, webApp, "Enters Credentials")
    Rel(webApp, authService, "Authenticates User")
    Rel(authService, webApp, "Authentication Token")
    Rel(webApp, backend, "Sends Authenticated Request")
    Rel(backend, authService, "Validates Token")
    Rel(authService, backend, "Validation Result")
    Rel(backend, database, "Retrieves User Data")
    Rel(database, backend, "User Data")
    Rel(backend, weatherAPI, "Fetches Weather Data")
    Rel(weatherAPI, backend, "Weather Data")
    Rel(backend, webApp, "User Data & Weather Updates")
    Rel(webApp, user, "Displays App Data")
