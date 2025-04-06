# 🌩️ Sundry Notification App - UML Activity Diagrams

Below are the selected (8) complex workflows represented as UML Activity Diagrams using Mermaid syntax.

---

## 1. User Registration

```mermaid
%%{init: {'theme':'default'}}%%
flowchart TD
    subgraph User
        A1([Start])
        A2[Enter Email & Password]
        A3[Submit Form]
        A7([End])
    end
    subgraph AuthService
        A4[Validate Credentials Format]
        A5{Email already exists?}
        A6[Create Account / Send Welcome Email]
    end

    A1 --> A2 --> A3 --> A4 --> A5
    A5 -- Yes --> A7
    A5 -- No --> A6 --> A7
```

---

## 2. User Login & Access Token Issuance

```mermaid
flowchart TD
    subgraph User
        B1([Start])
        B2[Enter Email & Password]
        B3[Submit Login]
        B7([End])
    end
    subgraph AuthService
        B4[Verify Credentials]
        B5{Are credentials valid?}
        B6[Issue Token / Start Session]
    end

    B1 --> B2 --> B3 --> B4 --> B5
    B5 -- No --> B7
    B5 -- Yes --> B6 --> B7
```

---

## 3. Weather Data Request & Caching

```mermaid
flowchart TD
    subgraph WebApp
        C1([Start])
        C2[Request Weather Info]
    end
    subgraph Cache
        C3{Is data cached?}
        C4[Return Cached Data]
    end
    subgraph Backend
        C5[Call Weather API]
        C6[Update Cache]
        C7[Return Fresh Data]
        C8([End])
    end

    C1 --> C2 --> C3
    C3 -- Yes --> C4 --> C8
    C3 -- No --> C5 --> C6 --> C7 --> C8
```

---

## 4. Set Notification Preferences

```mermaid
flowchart TD
    subgraph User
        D1([Start])
        D2[Select Notification Types]
        D3[Save Preferences]
    end
    subgraph WebApp
        D4[Send to Backend]
    end
    subgraph Backend
        D5[Validate Input]
        D6[Update PostgreSQL]
        D7([End])
    end

    D1 --> D2 --> D3 --> D4 --> D5 --> D6 --> D7
```

---

## 5. Trigger & Send Push Notification

```mermaid
flowchart TD
    subgraph System
        E1([Start])
        E2[Receive Weather Alert]
        E3[Check User Preferences]
        E4{Is user opted in?}
        E5[Prepare Notification]
        E6[Send via Push/Email/SMS]
        E7[Log Delivery Status]
        E8([End])
    end

    E1 --> E2 --> E3 --> E4
    E4 -- No --> E8
    E4 -- Yes --> E5 --> E6 --> E7 --> E8
```

---

## 6. Log User Activity (Analytics Pipeline)

```mermaid
flowchart TD
    subgraph WebApp
        F1([Start])
        F2[Track User Event]
    end
    subgraph Kafka
        F3[Publish Event to Kafka Topic]
    end
    subgraph DataPipeline
        F4[Transform & Store Event]
        F5([End])
    end

    F1 --> F2 --> F3 --> F4 --> F5
```

---

## 7. Handle API Errors & Trigger Alerts

```mermaid
flowchart TD
    subgraph Backend
        G1([Start])
        G2[Call External API]
        G3{Is API Successful?}
        G4[Return Data]
        G5[Log Error to Datadog]
        G6[Trigger Alert]
        G7([End])
    end

    G1 --> G2 --> G3
    G3 -- Yes --> G4 --> G7
    G3 -- No --> G5 --> G6 --> G7
```

---

## 8. Disaster Recovery: Failover to Backup DB

```mermaid
flowchart TD
    subgraph DBMonitor
        H1([Start])
        H2[Detect DB Failure]
    end
    subgraph RecoverySystem
        H3[Initiate Multi-AZ Failover]
        H4[Connect to Backup]
        H5[Restore Last Committed WAL Log]
        H6([End])
    end

    H1 --> H2 --> H3 --> H4 --> H5 --> H6
```

"""
