# Notification Project Roadmap

This roadmap outlines planned features and enhancements for the project to improve scalability, security, and user experience. Each item includes technical work anticipated for implementation.

---

## 1. Add Real-Time Notifications via WebSockets

**Goal:** Provide instant alerts to logged-in users without polling.

**Technical Tasks:**

* Set up WebSocket server using `socket.io` or native `ws` module.
* Authenticate WebSocket connections using user tokens.
* Emit events on critical weather changes (fire, high wind).
* Build front-end client hooks to subscribe and display notifications.
* Handle graceful disconnects and reconnections.

---

## 2.  Implement OAuth 2.0 Authentication

**Goal:** Allow users to sign in using Google/Microsoft for improved accessibility and trust.

**Technical Tasks:**

* Use `passport.js` with Google and Microsoft strategies.
* Link OAuth profile to existing user entity.
* Update auth routes to support third-party logins.
* Securely store refresh tokens.
* Add UI buttons and flows for OAuth login.

---

## 3. 🌎 Geofencing with Mapbox or Turf.js

**Goal:** Trigger location-aware weather notifications only when users are inside defined danger zones.

**Technical Tasks:**

* Use `@turf/turf` or Mapbox API to define geo-polygons.
* Compare user GPS location to affected regions.
* Store and manage active hazard zones in DB.
* Trigger notification logic only when `userInZone === true`.
* Visualize these zones on a map for admin users.

---

## 4. Admin Dashboard with Analytics

**Goal:** Allow admins to view usage metrics, active alerts, and system health.

**Technical Tasks:**

* Build dashboard UI using a charting library like `Recharts` or `Chart.js`.
* Add `/admin` route with protected access.
* Track key metrics: active users, recent alerts, failed deliveries.
* Aggregate analytics using `AnalyticsLogger`.
* Paginate and filter logs for better performance.

---

## 5. Enable Offline Notification Storage

**Goal:** Queue weather alerts for users with intermittent connectivity and push once back online.

**Technical Tasks:**

* Implement offline queue using localStorage or IndexedDB.
* Detect online/offline status with browser events.
* Sync offline events to backend via retry logic.
* Show visual cue of queued alerts.
* Ensure no duplicate alerts are pushed once reconnected.
