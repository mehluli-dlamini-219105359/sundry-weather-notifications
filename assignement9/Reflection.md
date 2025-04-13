# Reflection on Domain Model and Class Diagram Design

Designing the domain model and class diagram for the Sundry Notification App came with its fair share of challenges, decisions, and “wait, does this even make sense?” moments. I’ll break down how things unfolded and what I learned along the way.

## 1. Challenges Faced

The first big hurdle was figuring out how detailed the classes needed to be. I didn’t want to make the design too abstract and miss the point, but I also didn’t want to go too deep and end up drawing out things like “SessionManagerHelperServiceImpl.” The goal was to keep it readable but useful.

Defining relationships between classes also made me think a bit more than expected. For example, should `NotificationPreference` just be part of the `User` class, or should it live on its own? I went with composition—preferences are tightly connected to a user, and deleting the user should wipe those too. That seemed the cleanest.

Method definitions were a bit of a grey area. It was easy enough to know what a `User` might do—log in, log out—but with something like `AnalyticsEvent`, it got fuzzier. Eventually, adding something like `publishToKafka()` helped tie it back to the analytics and reporting goals from earlier tasks.

## 2. Linking Back to Previous Work

The diagram didn’t come out of thin air. It aligns closely with earlier tasks like state diagrams and functional requirements. For example, `AuthToken` and `User` directly relate to the login flow, token validation, and rate-limiting logic from earlier diagrams. The same goes for `Notification` and `WeatherData`—those match the flow where a weather update comes in and triggers an alert.

Even the more backend-y stuff, like `AnalyticsEvent` or `Backup`, ties back to requirements like real-time tracking, disaster recovery, and system monitoring. So in a way, the class diagram became a visual summary of what the system is supposed to do.

## 3. Trade-offs

Some trade-offs were necessary. I avoided inheritance in most places—keeping things flat made it easier to understand. It would’ve been tempting to create a superclass for “SystemComponent” or something, but that would’ve added unnecessary complexity. 

Another decision was around external systems. Instead of drawing out `WeatherAPI` or `FirebaseAuth` as full-on classes, I kept the interactions encapsulated in the relevant internal classes like `AuthToken` and `WeatherData`. That kept the focus on what we control inside our system.

## 4. Lessons Learned

What stood out the most was how object-oriented design forces you to really understand your system. You can’t fake it—if something’s unclear, it shows up as a weird method or an awkward relationship in the diagram.

Cohesion and clear responsibility made everything easier. The more focused a class was, the more sense it made. For example, `NotificationPreference` was clean and straightforward once I separated it out.

Also, thinking long term matters. If the app expands to new notification types or needs to scale analytics, the current model allows room for that without a massive redesign. That’s a sign that the foundation is solid.

---

Overall, this task was a reminder that design is about balance—between technical accuracy and practical simplicity, and between what works now vs. what will work later.
