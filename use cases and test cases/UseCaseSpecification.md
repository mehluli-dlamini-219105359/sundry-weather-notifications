# Critical Use Cases

## 1. **Use Case: Sign in to App**
**Actor:** Client  
**Precondition:** User must have registered credentials (email/password or OAuth).  
**Postcondition:** User is authenticated and granted access to the app.  
**Basic Flow:**  
1. Client opens the app.  
2. System prompts for credentials (username/email and password).  
3. Client enters credentials and submits.  
4. System authenticates the user via the authentication service.  
5. If authentication is successful, the system grants access and loads the home screen.  
6. Client is logged in and ready to use the app.  
**Alternative Flows:**  
- **Invalid Credentials:** If the credentials are invalid, the system displays an error message and prompts the client to re-enter their credentials.  
- **Network Failure:** If there’s a network issue, the system displays a "Connection error" message.

---

## 2. **Use Case: Fetch Weather Data**
**Actor:** Developer  
**Precondition:** The system must be connected to a valid weather API (OpenWeatherMap).  
**Postcondition:** Weather data is fetched from the API and displayed to the user.  
**Basic Flow:**  
1. Developer sends a request to the backend API to fetch the latest weather data.  
2. The backend sends a request to the weather API.  
3. Weather API returns data about temperature, humidity, forecasts, etc.  
4. The backend processes the weather data and formats it as needed.  
5. The backend sends the weather data to the web/mobile app.  
6. The app displays the weather updates to the client.  
**Alternative Flows:**  
- **Weather API Unavailable:** If the weather API is down, the system displays a fallback message, like "Weather data unavailable."  
- **Invalid Data Response:** If the data returned is incomplete or invalid, the system requests a new fetch attempt.

---

## 3. **Use Case: Send Notifications**
**Actor:** Support Agent  
**Precondition:** User must have weather preferences set in the system.  
**Postcondition:** Notification is successfully sent to the user (via SMS, email, or push notification).  
**Basic Flow:**  
1. Support Agent selects the user and their weather preferences.  
2. System checks the notification settings and the weather condition thresholds for the user.  
3. If the weather condition meets the threshold (e.g., storm alert, temperature change), the system sends the notification.  
4. The system sends a push, email, or SMS notification to the user.  
5. Client receives the notification on their chosen platform (e.g., mobile, email).  
**Alternative Flows:**  
- **Notification Delivery Failure:** If the notification fails to send, the system retries and logs the failure for review.  
- **User Preferences Change:** If the user updates notification preferences, the system ensures the updated preferences are used for future notifications.

---

## 4. **Use Case: Retrieve User Preferences**
**Actor:** Database Administrator  
**Precondition:** User must be authenticated and have saved preferences in the database.  
**Postcondition:** User preferences (e.g., preferred weather alerts) are retrieved and displayed to the user.  
**Basic Flow:**  
1. The app sends a request to the backend to fetch user preferences.  
2. The backend queries the database for the authenticated user’s preferences.  
3. The database returns the user’s stored preferences.  
4. The backend processes the preferences and sends them to the web/mobile app.  
5. The app displays the user preferences in the settings section.  
**Alternative Flows:**  
- **No Preferences Found:** If no preferences are found, the system provides a default set of preferences and allows the user to modify them.

---

## 5. **Use Case: Monitor System Logs**
**Actor:** DevOps Engineer  
**Precondition:** System must be running and logging service must be active.  
**Postcondition:** System logs are monitored and performance or errors are flagged.  
**Basic Flow:**  
1. DevOps Engineer accesses the system logs through a monitoring tool.  
2. System displays logs related to backend performance, errors, and API requests.  
3. DevOps Engineer reviews logs for any unusual activity or performance issues.  
4. If any issues are found, the DevOps Engineer takes corrective action (e.g., scaling the system or fixing bugs).  
**Alternative Flows:**  
- **Log Inaccessibility:** If logs cannot be accessed, the system alerts the DevOps Engineer to investigate the cause (e.g., service downtime).  
- **Performance Degradation:** If performance degradation is detected, the system triggers an alert for action.

---

## 6. **Use Case: Track User Activity**
**Actor:** Data Engineer  
**Precondition:** User must be logged into the app and performing actions.  
**Postcondition:** User activity is logged and can be used for analytics or notification triggers.  
**Basic Flow:**  
1. The app tracks the user’s actions (e.g., opening the app, checking the weather, changing preferences).  
2. The app sends user activity data to the backend.  
3. The backend stores this data in the user activity log.  
4. Data Engineer reviews the activity logs to analyze user behavior.  
5. Insights from user activity are used to improve notifications or app features.  
**Alternative Flows:**  
- **Data Inconsistency:** If user activity logs are inconsistent, the system flags the data for investigation and resending.  
- **Data Loss:** If user activity is not tracked due to a backend failure, the system retries capturing the activity data.

---

## 7. **Use Case: Resolve Technical Issues**
**Actor:** System Admin  
**Precondition:** A system issue (e.g., service failure, downtime) must have been detected.  
**Postcondition:** System issue is resolved and normal operations resume.  
**Basic Flow:**  
1. System Admin is alerted about a technical issue (e.g., server downtime, service error).  
2. System Admin accesses the system to investigate the issue.  
3. The admin identifies the root cause (e.g., server overload, misconfiguration).  
4. The admin applies the fix (e.g., scaling the service, rebooting the server).  
5. The issue is resolved, and the system returns to normal operation.  
**Alternative Flows:**  
- **Issue Unresolved:** If the issue cannot be resolved immediately, the system triggers an alert for escalation to a higher-level admin.  
- **Partial Recovery:** If the system is only partially recovered, it returns to a degraded state, and the admin continues troubleshooting.

---

## 8. **Use Case: Authenticate User**
**Actor:** Client  
**Precondition:** User must have registered credentials.  
**Postcondition:** User is authenticated and granted access to the system.  
**Basic Flow:**  
1. Client enters login credentials (email/password).  
2. System validates the credentials by contacting the authentication service.  
3. Authentication service returns a success or failure response.  
4. If successful, the system generates a session or authentication token for the client.  
5. Client is logged in and granted access to their profile and preferences.  
**Alternative Flows:**  
- **Incorrect Credentials:** If the credentials are incorrect, the system prompts the user to try again and provides a "forgot password" option.  
- **System Downtime:** If the authentication service is unavailable, the system displays an error and prompts the client to try again later.

---
