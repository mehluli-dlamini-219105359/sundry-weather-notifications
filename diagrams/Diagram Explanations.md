## Explanation of Diagrams and Functional Requirements
This document maps the **key states** of each UML state transition diagram to their corresponding **functional requirements** for traceability and system behavior validation.

To view functional requirements and reference the mapping , please click on this link [Functional Requirements](https://github.com/mehluli-dlamini-219105359/sundry-weather-notifications/blob/main/SYSTEM%20REQUIREMENTS.md)

---

## 1. 👤 User (Authentication & Access Management)

**Key States:**  
- `LoggedOut`  
- `Authenticating`  
- `Authenticated`  
- `ViewingData`  

**Mapped Functional Requirements:**

| Functional Requirement | Description |
|------|-------------|
| **1** | - Authenticated → Token issued.<br> - Authenticating → LoggedOut (on failure).<br> - Rate limiting logic implied after repeated transitions from Authenticating → LoggedOut. |
| **6** | - Authenticated → ViewingData implies access control success.<br> - Role-based access can be tied to post-authentication state validation. |

---

## 2. 📱 Web/Mobile App (Weather Data & Multi-Platform Support)

**Key States:**  
- `Idle`  
- `Loading`  
- `AwaitingAuth`  
- `Authenticated`  
- `DisplayingData`  
- `Error`  

**Mapped Functional Requirements:**

| Functional Requirement | Description |
|------|-------------|
| **2** | - DisplayingData ↔ Error reflects API/cache availability.<br> - Idle → DisplayingData happens from cache or fresh API call. |
| **8** | - DisplayingData implies the system responds with platform-compatible data. |

---

## 3. ⚙️ Backend API (Performance, Weather Data, Access Control)

**Key States:**  
- `Idle`  
- `ProcessingRequest`  
- `FetchingUserData`  
- `FetchingWeatherData`  
- `PreparingResponse`  
- `SendingResponse`  
- `Error`  

**Mapped Functional Requirements:**

| Functional Requirement | Description |
|------|-------------|
| **2** | - FetchingWeatherData may return cached data if API fails (maps to failover behavior). |
| **5** | - ProcessingRequest → Error (graceful degradation).<br> - Backend throughput is tested via stress/load scenarios. |
| **6** | - Backend enforces role access (tied to state transitions based on RBAC permissions). |
| **12** | - SendingResponse → Error could map to failover procedures under stress/load/failure. |

---

## 4. 🗃 Database (Preferences, Backups, Recovery)

**Key States:**  
- `Idle`  
- `Reading`  
- `Writing`  

**Mapped Functional Requirements:**

| Functional Requirement | Description |
|------|-------------|
| **3** | - Writing reflects user preference changes.<br> - Updates must be persisted within 5s (fast state return to Idle). |
| **9** | - Database operations align with RDS backup expectations. |
| **12** | - PostgreSQL’s WAL ensures state recoverability post-Writing. |

---

## 5. 📣 Notification Service (Delivery & Performance)

**Key States:**  
- `Idle`  
- `PreparingNotification`  
- `Sending`  
- `Delivered`  
- `Failed`  

**Mapped Functional Requirements:**

| Functional Requirement | Description |
|------|-------------|
| **4** | - PreparingNotification → Sending should occur <10s.<br> - Sending → Delivered/Failed gets logged. |
| **10** | - Sending → Failed → Log/Alert (Datadog). |
| **5** | - High volumes during Sending reflect stress test conditions. |

---

## 6. 🔐 Authentication Service (Token Management & RBAC)

**Key States:**  
- `Idle`  
- `ValidatingCredentials`  
- `TokenIssued`  
- `Rejected`  

**Mapped Functional Requirements:**

| Functional Requirement | Description |
|------|-------------|
| **1** | - ValidatingCredentials → TokenIssued (successful login).<br> - Rejected state used for failed attempts. |
| **6** | - TokenIssued includes RBAC scopes.<br> - Rejected could trigger access alert if thresholds crossed. |

---

## 7. ⚡ Cache (Weather Caching & Performance)

**Key States:**  
- `Empty`  
- `Populated`  
- `Expired`  
- `Refreshed`  

**Mapped Functional Requirements:**

| Functional Requirement | Description |
|------|-------------|
| **2** | - Expired → Refreshed aligns with 15-minute TTL.<br> - Populated serves data when API fails. |
| **5** | - Populated improves response under load (performance gain).<br> - Expired state during high traffic maps to cache failover strategy. |

---
