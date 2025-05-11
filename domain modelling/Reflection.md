# Reflection on Domain Model and Class Diagram Design


## 1. Challenges Faced

- Defining relationships between classes also made me think a bit more than expected. For example, should `NotificationPreference` just be part of the `User` class, or should it live on its own.
- The Method definitions were a bit challenging as well. It was easy enough to know what a `User` might do—log in, log out—but with something like `AnalyticsEvent`, is where it got a little complex. Eventually, adding something like `publishToKafka()` helped tie it back to the analytics and reporting goals from earlier tasks. [Get Documentation of Kafka here](https://www.confluent.io/resources/ebook/kafka-the-definitive-guide/?utm_medium=sem&utm_source=google&utm_campaign=ch.sem_br.nonbrand_tp.prs_tgt.kafka_mt.mbm_rgn.emea_sbrgn.tier3_lng.eng_dv.all_con.kafka-concepts_term.kafka-concepts&utm_term=kafka%20concepts&creative=&device=c&placement=&gad_source=1&gclid=CjwKCAjwwe2_BhBEEiwAM1I7sTnX9LoZNNDBycxmKyK5HcfLAN45_B2Z8fXlxg-reeexc_cNHtmTOxoC8sYQAvD_BwE)

## 2. Linking Back to Previous Work

 The diagram aligns closely with earlier tasks like state diagrams and functional requirements. For example, `AuthToken` and `User` directly relate to the login flow, token validation, and rate-limiting logic from earlier diagrams. The same goes for `Notification` and `WeatherData`—those match the flow where a weather update comes in and triggers an alert. These are also part of the linked issues on the Kanban Board.

Even the more backend-y stuff, like `AnalyticsEvent` or `Backup`, ties back to requirements like real-time tracking, disaster recovery, and system monitoring. So in a way, the class diagram became a visual summary of what the system is supposed to do.

## 3. Trade-offs

Some trade-offs were necessary. I avoided inheritance in most places—keeping things flat made it easier to understand. 

Another decision was around external systems. Instead of drawing out `WeatherAPI` or `FirebaseAuth` as full-on classes, I kept the interactions encapsulated in the relevant internal classes like `AuthToken` and `WeatherData`. That kept the focus on what we control inside our system.

## 4. Lessons Learned

How object-oriented design forced me to really understand system design. Leading to clearer and cleaner diagrams.
Cohesion and clear responsibility made everything easier. The more focused a class was, the more sense it made. For example, `NotificationPreference` was clean and straightforward once I separated it out.


