# UML Activity Diagrams - Explanations

## 1. User Registration

**Explanation:**
- The user enters their credentials and submits the form.
- The **AuthService** validates the credentials. If the email exists, the process ends. If the email is new, an account is created and a welcome email is sent.
- **Functional Requirement Addressed:** **User Authentication & Access Management**.

---

## 2. User Login & Access Token Issuance

**Explanation:**
- The user enters their login credentials and submits them.
- **AuthService** verifies the credentials. If valid, an access token is issued; otherwise, the process ends.
- **Functional Requirement Addressed:** **User Authentication & Access Management**.

---

## 3. Weather Data Request & Caching

**Explanation:**
- The app requests weather data. If the data is cached, it's returned; otherwise, the backend fetches fresh data, updates the cache, and sends it.
- **Functional Requirement Addressed:** **Weather Data Retrieval & Caching**.

---

## 4. Set Notification Preferences

**Explanation:**
- The user selects and saves their notification preferences.
- The preferences are sent to the backend, which validates and updates the database.
- **Functional Requirement Addressed:** **Personalized Notification Preferences**.

---

## 5. Trigger & Send Push Notification

**Explanation:**
- A weather alert is received, and the system checks if the user has opted in for notifications.
- If opted in, the notification is prepared, sent, and its delivery status is logged.
- **Functional Requirement Addressed:** **Push Notification Delivery**.

---

## 6. Log User Activity (Analytics Pipeline)

**Explanation:**
- WebApp captures user activity and sends it to Kafka for streaming.
- Kafka streams the event, which is then transformed and stored in the data pipeline for reporting and analytics.
- **Functional Requirement Addressed:** **Data Pipeline for Analytics**.

---

## 7. ⚠️ Handle API Errors & Trigger Alerts

**Explanation:**
- An API call is made by the backend. If successful, the data is returned; if it fails, the error is logged and an alert is triggered.
- **Functional Requirement Addressed:** **Logging & Monitoring**.

---

## 8. 🔁 Disaster Recovery: Failover to Backup DB

**Explanation:**
- When a database failure is detected, the recovery system initiates a failover to a backup instance and restores the most recent transaction using write-ahead logging (WAL).
- **Functional Requirement Addressed:** **Disaster Recovery & Failover**.

---
"""

# Save the explanations-only markdown file
explanations_only_path = Path("/mnt/data/UML_ActivityDiagrams_Explanations_Only.md")
explanations_only_path.write_text(uml_explanations_only)

explanations_only_path.name
