**SYSTEM REQUIREMENTS**

| **Title** | **Sundry Notifications (Functional Requirements)** |  |
|-----------|----------------------------------------------------|---|
| **#** | **Requirement** | **Acceptance Criteria** |
| **1.** | **User Authentication & Access Management** | - Users should receive an authentication token upon successful login.<br>- Failed login attempts should trigger a rate limit after 5 unsuccessful tries to prevent brute-force attacks. |
| **2.** | **Weather Data Retrieval & Caching** | - Cached data should be invalidated and refreshed after 15 minutes.<br>- The system should return cached data if the external API is unavailable. |
| **3.** | **Personalized Notification Preferences** | - Users should be able to opt in/out of specific notifications.<br>- Changes to preferences should update in PostgreSQL within 5 seconds to reflect in subsequent notifications. |
| **4.** | **Push Notification Delivery** | - Notifications should be sent within 10 seconds of receiving a high-priority alert.<br>- Delivery status should be logged in Datadog for analytics and troubleshooting. |
| **5.** | **System Performance & Scalability** | - Load tests using Apache JMeter should confirm API response times remain stable under peak usage conditions.<br>- The system should degrade gracefully if capacity limits are reached (e.g., queue requests, return fallback responses).<br>- Stress testing with k6 should simulate gradual and spike traffic scenarios to identify performance bottlenecks. |
| **6.** | **Role-Based Access Control** | - Auth0 RBAC policies should restrict: <br>  - The Product Manager to modifying global notification settings.<br>  - The DevOps Engineer to system logs and performance metrics.<br>  - The Database Administrator to user data and schema management.<br>- Unauthorized access attempts should be logged in Datadog and trigger an alert. |
| **7.** | **Data Pipeline for Analytics** | - Kafka topics should be used to ingest user activity logs for scalable event streaming.<br>- Event data ingestion latency should not exceed 2 seconds under normal load.<br>- Data transformation jobs should complete within 30 minutes for daily reporting. |
| **8.** | **Multi-Platform Support (Web & Mobile)** | - API responses should be compatible with both platforms without modification.<br>- UI components should maintain a consistent design across web and mobile interfaces. |
| **9.** | **Scheduled Database Backups** | - Backups should be managed using AWS RDS Automated Backups.<br>- Restoration tests should be conducted monthly to verify backup integrity. |
| **10.** | **Logging & Monitoring** | - Logs should be collected in Datadog and be searchable within 5 seconds of an event occurrence.<br>- An alert should trigger if API error rates exceed normal operational thresholds. |
| **11.** | **User Activity Dashboard** | - The dashboard should refresh data every 10 seconds using Grafana for visualization.<br>- Product Managers should be able to filter data by time range and user segment. |
| **12.** | **Disaster Recovery & Failover** | - Failover should occur within 30 seconds using AWS RDS Multi-AZ failover.<br>- Data loss during failover should be minimized to the last committed transaction, using PostgreSQL’s write-ahead logging (WAL). |
