**Software Engineering Assignement 3** Mehluli Dlamini 219105359 

The **Sundry Notification Web App** is a project that will focus on proximity based push notifications for weather events in Cape Town , such as high winds and fires. 
I undertook or chose this project based on the role that awareness or early warning systems can play to improve alertness towards climate and weather events on the road for commuters. 
Alertness while driving and being a passenger in a private or public vehicle improves the likelihood of less accidents. Highwinds can cause vehicles to swerve into other lanes while fires can cause 
less visibilty for both drivers and padestrians on the very same roads. These weather events are common occurrences in Cape Town and have caused accidents along the N1 and N2 highways. 
The arrive alive campaign in South Africa has helped create public awareness of the dangers of drinking and driving , this awareness project through a simple Notification can possible create more 
alert drivers and contribute to safer and much intentional driving practices. Small nudges through a cellular device can impossible alter behaviour or attitude as we use these devices daily.

Links to other files in project [SPECIFICATION.md](SPECIFICATION.md)
& [ARCHITECTURE.md](ARCHITECTURE.md)

Additional links to other files in the Project :
[Activity Diagram](https://github.com/mehluli-dlamini-219105359/sundry-weather-notifications/blob/main/diagrams/Activity%20Diagrams.md) & [State Transition Diagram](https://github.com/mehluli-dlamini-219105359/sundry-weather-notifications/blob/main/diagrams/State%20Transition%20Diagrams.md)

**Language Choice : Typescript👨🏽‍💻** 
- TypeScript offers strong typing, which helps catch errors early, leading to more robust and reliable code. Typescripts specifies types on class properties and methods (e.g., string, number, Date) ensures that only valid values can be assigned to them.
[Typescript Docx](https://medium.com/simform-engineering/writing-elegant-typescript-best-practices-for-clean-and-sustainable-code-0b228e44170d)

- (IntelliSense Offering) TypeScript is supported by modern IDEs like VSCode and IntelliJ which provide auto-completion and inline documentation as you write code. This speeds up development and helps you avoid mistakes.

- As the code base grows, TypeScript makes it easier to refactor without breaking functionality. 

- (Seperating Classes) The models/ folder groups all classes and entities related to the app's core logic. Each class has its own file, making it easier to maintain, modify, and expand.

- (Modularity) Each class is encapsulated in its own file. This avoids bloating a single file with too much functionality, and it makes the codebase easier to navigate.

- [Unit Testing](https://www.testim.io/blog/typescript-unit-testing-101/) With separate files, it’s easy to write unit tests for each class or method. You can test classes in isolation, making debugging and validation of individual components easier.

**Key Design Decisions 🏛️**
Class-Based Approach:

Classes provide clear encapsulation and allows for easy expansion. i.e.

- [User](https://github.com/mehluli-dlamini-219105359/sundry-weather-notifications/blob/main/src/models/User.ts) has methods like login() and updatePreferences() to represent actions a user can perform.

- [NotificationPreference](https://github.com/mehluli-dlamini-219105359/sundry-weather-notifications/blob/main/src/models/NotificationPreference.ts) is a self-contained class with properties and methods that are logically grouped together (e.g., update() and validateChanges())

- **TypeScript Getters/Setters:**

Private fields (private) are used to encapsulate data and prevent direct manipulation from outside the class.

Methods like updatePreferences() or send() are public and represent actions that can be invoked from outside the class. This ensures that the class's internal logic is kept separate from external components.

**Relationship Mapping:**

- Relationships between classes like User owning Notification or WeatherData triggering Notification are kept simple and clear.

- Using TypeScript interfaces for these relationships would further solidify the contract between entities.