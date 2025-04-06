# Reflection on UML Diagrams for Sundry Notification App (Task 8)

### 1. **Choosing Granularity for States/Actions**
One of the primary challenges was determining the appropriate amount of detail for both states and actions. The balance between **detail and readability** was crucial. Too much detail complicated the diagram, making it harder for anyone besides myself to understand, while too little detail risks leaving out critical steps for them as well. 

For instance, in the **user authentication state diagram**, could have been broken down to further states such as "Waiting for Input" into multiple sub-states like "Awaiting Username" and "Awaiting Password," when designing it lead to a cluttered diagram. Instead, grouping these into one state helped keep the diagram more concise while accurately reflecting the system behavior. Similarly, actions in activity diagrams, such as "Validate User Preferences," could be subdivided into smaller steps, but doing so would have made the process flow harder to follow. 
Hence, we made the decision to use broader, high-level actions to maintain clarity.

### 2. **Aligning Diagrams with Agile User Stories**
Another challenge arose from aligning **UML diagrams** with the set user stories while also aligning with functional requirements. 
Agile development is based on incremental and iterative updates, which means that the diagrams can evolve as the project progresses. At first, a **user login** story might only require a simple **activity diagram** showing the login process. However, as new requirements, such as **multi-factor authentication** or **rate-limiting login attempts**, are going to be introduced, the diagrams needed to be updated to reflect these changes.

It was also important to ensure that diagrams always reflected the current **business logic** and development priorities. This iterative process required continuous collaboration between potential product owners, developers, and stakeholders to ensure the diagrams remained relevant and useful as much as I am the sole stakeholder currently.

### 3. **State Diagrams vs. Activity Diagrams**
A significant challenge was understanding the distinction between **state diagrams** and **activity diagrams**, both of which represent system behavior but in different ways. **State diagrams** describe the states of an object or system and the transitions between them, while **activity diagrams** focus on the flow of actions within a process.

For example, in the case of **user authentication**, a state diagram was more appropriate because it represented the user’s journey through various states like "Logged In" or "Login Failed," depending on events such as a successful login. Conversely, in the **weather data retrieval** process, an **activity diagram** was more fitting as it focused on actions like "Fetch Weather Data" or "Check Cache" and decisions like "Is Data Available in Cache?"

This distinction posed a challenge when deciding which diagram type to use for specific workflows. While **state diagrams** are better suited to modeling object lifecycles, **activity diagrams** provide a clearer view of process flows.

### 4. **Conclusion**
In conclusion, creating UML diagrams for this project involved addressing several challenges: choosing the right granularity for states and actions, ensuring alignment with Agile user stories, and understanding the functional differences between state diagrams and activity diagrams. Striking the right balance between simplicity and detail, along with adapting diagrams to frequent changes in the Agile development process, was crucial to ensuring the diagrams remained accurate, informative, and useful.
