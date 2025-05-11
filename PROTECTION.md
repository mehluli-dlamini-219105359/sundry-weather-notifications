## Protection Rules 🗒️ and Screenshots

## Justification 

**1. Protecting the `main` Branch 🔒**
Requiring pull request reviews ensures that every change is reviewed by at least one other team member, helping to catch errors and promote shared code ownership. Enforcing status checks guarantees that all code passes automated tests and meets quality standards before being merged. Disabling direct pushes ensures that all changes go through the pull request workflow, maintaining a clear and auditable development process.


Setting up rules for the `main` branch helps by avoiding any surprises and keeps the codebase stable. When everyone follows the same workflow, especially around reviews and CI checks, my self and potential collaborator ensure that the software is more reliable.

Requiring at least one pull request review means no one is merging code in isolation — bugs are easier to catch,making collaboration and knowledge transfer easier.

Making sure all status checks pass before merging reinforces discipline around testing and automation.

Disabling direct pushes forces everyone commit to main to use the pull request route, which keeps the process clean and traceable. There's always a visible history of what was changed, who approved it, and why it went in. 


**1. Pull Request Review**
![image](https://github.com/user-attachments/assets/5dde3f43-20ff-4b68-81b7-bde67475946d)

**2. Require Status Checks to Pass**
![image](https://github.com/user-attachments/assets/5b26ab7f-4498-4d58-bacf-15076a03172c)

**3. Disable direct pushes**
![image](https://github.com/user-attachments/assets/6048b59d-e549-4a3c-9df3-cb2c112bc509)

**Rule Sets Created**
![image](https://github.com/user-attachments/assets/5d595dfe-55c6-4c17-b93c-e35cc31df48d)



