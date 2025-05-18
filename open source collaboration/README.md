## Mehluli Dlamini 219105359 

## Updated README - Features for Contribution

| Feature                          | Description                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| Role-Based Access Control (RBAC) | Restrict access to features based on user roles like Admin, Guest, etc.    |
| Two-Factor Authentication (2FA)  | Add a second layer of user authentication to improve login security        |
| Proximity Notification Engine    | Triggers alerts based on geolocation and real-time weather data            |
| Notification Delivery Mechanism | Pluggable system (Email, SMS, Push) for sending alerts                     |
| Alert Preferences UI            | Interface for users to set and update weather alert preferences            |
| Weather Report Generator        | Generates detailed reports with temperature, humidity, wind, etc.         |
| Analytics Logger                | Tracks user interactions and alert delivery success/failure (bug under review) |
| Repository Interface Layer      | Centralized data access logic using generic TypeScript interfaces          |

## [17-05-25] Getting Started

To run the Sundry Notification Web App locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mehluli-dlamini-219105359/sundry-weather-notifications.git
   cd sundry-weather-notifications
   ```

2. **Install dependencies:**
   ```bash
   npm ci
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Run unit tests:**
   ```bash
   npm run test:unit
   ```

For contribution guidelines and setting up the architecture, refer to:
- [SPECIFICATION.md](SPECIFICATION.md)
- [ARCHITECTURE.md](ARCHITECTURE.md)
- [Activity Diagram](https://github.com/mehluli-dlamini-219105359/sundry-weather-notifications/blob/main/diagrams/Activity%20Diagrams.md)
- [State Transition Diagram](https://github.com/mehluli-dlamini-219105359/sundry-weather-notifications/blob/main/diagrams/State%20Transition%20Diagrams.md)


The **Sundry Notification Web App** is a project that will focus on proximity based push notifications for weather events in Cape Town , such as high winds and fires. 
I undertook or chose this project based on the role that awareness or early warning systems can play to improve alertness towards climate and weather events on the road for commuters. 
Alertness while driving and being a passenger in a private or public vehicle improves the likelihood of less accidents. Highwinds can cause vehicles to swerve into other lanes while fires can cause 
less visibilty for both drivers and padestrians on the very same roads. These weather events are common occurrences in Cape Town and have caused accidents along the N1 and N2 highways. 
The arrive alive campaign in South Africa has helped create public awareness of the dangers of drinking and driving , this awareness project through a simple Notification can possible create more 
alert drivers and contribute to safer and much intentional driving practices. Small nudges through a cellular device can impossible alter behaviour or attitude as we use these devices daily.

Links to other files in project:
- [SPECIFICATION.md](SPECIFICATION.md)
- [ARCHITECTURE.md](ARCHITECTURE.md)

Additional links to other files in the Project :
[Activity Diagram](https://github.com/mehluli-dlamini-219105359/sundry-weather-notifications/blob/main/diagrams/Activity%20Diagrams.md) & [State Transition Diagram](https://github.com/mehluli-dlamini-219105359/sundry-weather-notifications/blob/main/diagrams/State%20Transition%20Diagrams.md)

## **Language Choice : Typescript👨🏽‍💻** 
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

## 💡 Creational Patterns — **JUSTIFICATION**

1. Simple Factory
Used `UserFactory` to centralize creation of Admin, Guest, and Regular users.

2. Factory Method
Used `NotificationProcessor` with subclass implementations (`Email`, `SMS`) for pluggable notification delivery strategies.

3. Abstract Factory
Created `AlertFactory` to generate `Notification` + `NotificationPreference` as a related set for Web or Mobile platforms.

4. Builder
Implemented `WeatherReportBuilder` to construct detailed weather reports with optional fields like humidity and wind.

5. Prototype
Used `UserPrototypeCache` to clone preconfigured base users like Guest and Admin, avoiding costly init logic.

6. Singleton
Created `AnalyticsLogger` as a global logger for user event tracking, ensuring consistent logging across services.

## 📁 Repository Interface Design - JUSTIFICATION [Repositories](https://github.com/mehluli-dlamini-219105359/sundry-weather-notifications/tree/main/src/repositories)
- Using generic interfaces ensures reusability, consistency, and type safety across all entities, avoiding duplication of standard CRUD logic for each repository. It simplifies maintenance because any change to CRUD operations is made once, not dozens of times.
- A dedicated repository folder keeps all data access logic isolated, making the codebase cleaner, easier to navigate, and aligned with separation of concerns principles. It also improves scalability: as new entities are added, their repositories fit neatly into an organized structure.

## 🔩 Dependency Injection v Factory - JUSTIFICATION [Factory Pattern](https://github.com/mehluli-dlamini-219105359/sundry-weather-notifications/blob/main/src/factories/RepositoryFactory.ts)

I have opted to use Factory Pattern because:
Factory allows for the manual creation of objects where as Dependency injection automatically handles object creation and wiring (you just declare dependencies).

- No External Dependencies: This project does not use any external libraries (currently) — just TypeScript's built-in functionality.  
- Flexibility: It's easy to swap out repository implementations (like switching to a database-backed UserRepository) by modifying a few lines in the factory method. i.e. [Factory Improvement](https://github.com/mehluli-dlamini-219105359/sundry-weather-notifications/issues/28)
- Explicit Object Creation : Easy support for handling environment configurations or adding logic to object creation.
- Good for Smaller Apps: Since the project is still in its early stages, with only one repository and no complex dependency chains, using the Factory pattern can keep things clear and concise.
- Reusability:	Can be reused for switching implementation. 
- Ease of transition: If your app grows in complexity over time, you can easily refactor to DI when necessary [Additional Reading](https://www.tutorialspoint.com/design_pattern/factory_pattern.htm)

## Github Workflow CI/CD

## Running Tests Locally

Run unit tests locally using `npm run test:unit`. Make sure you’ve installed dependencies with `npm ci`. The tests are focused on the `tests/unit` folder and are meant to catch problems early, but locally they won’t block you — useful for when you’re iterating fast or isolating a bug.

## CI/CD Pipeline

The pipeline runs automatically on every push and on pull requests to `main`. It installs dependencies, runs unit tests, and logs failures without stopping the rest of the workflow. When changes are merged into `main`, the app is rebuilt, and the output from `dist/` is uploaded as an artifact. If the build succeeds, Vercel handles deployment using the project and org IDs from secrets. Even if tests fail, artifacts are still captured for visibility.

## Artefact Generation 
Issue with creating an artefact as previous bugs not caught / handled correctly prevented it from being build. Experiencing issue from not running unit tests on classes. 
