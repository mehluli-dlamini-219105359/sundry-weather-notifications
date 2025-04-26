# sundry-weather-notifications

**Project Title :** Sundry Weather Notifications 

**Domain:** Meteorology. 
- Integration with WeatherAPIs , application will provide real time updates and use environmental data service to users.

**Problem Statement:** The purpose of the Sundry Weather Notifications application is to inform commuters about weather events around their area , the route they use to commute and inform them and better plan around any potential weather concerns forecasted for their specific location. Changes in weather such as high finds and fires which either cause more force being exterted on you the body of a vehicle or a decrease in visibility on roads, have a great impact on the time and speed in which a motor vehicle can travel. To simply nudge a user through notifications before and or during a trip to be cautious of their speeds and engage within the application through a scoreboard system can create a community of more alert drivers , no matter the size. 

The Cape Town N1 and N2 high ways are the busy public roads during peak hour and the likehood of accidents is quite common ,creating awareness and conscientising people on the road about how their behaviour on the road can lead to safer journies for all persons. Weather conditions are important for all passengers on the road as it can lead to them being better prepared to be on the road , make sure their vehicles are road worthy which can in turn decrease the likelihood of accidents. 

**Individual Scope:** 
The development of a complete artefact requires technical skills and a requirement gathering processes which will include: 
1. Access to weather data and open source apis such as **openweathermap** and **opeanweather api** , for real time weather updates which will be used to send push notifications.
2. UI/UX Design for the client facing application for onboarding and selection of residential address, using react and angular js whihc are popular development languages than can support api integration .
3. <ins>Technical Requirements :</ins>
   User authentication for unique client sign in. 
   Hosting through a database such as firebase is also crucial as it provides real time analytics on users , actions and potential downtime of services.
   Firebase can also store user history and preferences for a more tailored experience.
   Push notifications depending on the pricing of real time queries through the api and firebase/heroku per request messaging can either be through SMS , Email and Push (on Mobile Device)

5. <ins>Time Constrains</ins> , development tasks are never predictable and using data from other sources can also lead to costs being incurred. The importance of phases in the Software Development Life Cycle significantly improves planning and creating better completion for this project. Using a phased approach these are the implementation steps 
   - documentation and requirements analysis
   - API integrations
   - UI . UX Development
   - Push Notificatons solutioning
   - Testing
  
6. System challenges and constraints ; Pricing for Firebase , these rate limits will affect how many real time push notifications are being sent out to users. API calls that also need to be cached using redis can lead to poor optimisation and impact client experience.

7. The **4 containers** namely cache , notification service , user analytics and logging service their interactions are implicit or abstracted. They are not crucial for core performance and behaviour , mostly used to manage and track system health.
This is is important in the balancing of the detail and readability of the diagram. Included interactions are meaningful.
   
