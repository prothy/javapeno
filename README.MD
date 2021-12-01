# ERP Application

This is an enterprise resource planning system that we worked on as our final project for school. You can see a live version of this site [here](https://javapeno-erp-frontend.herokuapp.com/). Note that the frontend and backend components are hosted separately on Heroku, and it may take some time for the first action to work as the dynos are asleep when idle. A test username is `teszt_elek` with password `123`

In the first sprint, we worked on the backend with the goal to create a database and a set of API endpoints without a frontend, using Java Spring and PostgreSQL, and we utilized tools such as Postman or Swagger to test and present them. It was our first experience using Spring's database management system, JPA. You may find the code in the relevant `server` folder.

The main features we planned to realize in the first sprint are the following:

- **Employee management**
  - List and filter all employees in the database
  - Add and remove (i.e. deactivate) employees
  - Request holidays
- **Accounting**
  - List and filter all transactions
  - Add payments

Our second sprint consisted mainly the frontend, where we implemented the API endpoints completed in the previous sprint, with some minor, complementing changes to the backend. The relevant code is found in the `client` directory. As we had experience working with React in one of our previous projects, [a webshop](https://github.com/prothy/codecool-shop), we decided it was the ideal framework to go with, and as we were under time pressure, we chose Bootstrap as a UI framework.

In the third sprint, we intended to include the following:

- **Login and access control system**
  - There are three types of users, "user", "super user", and "admin"
    - this we failed to implement and are working on in the third sprint using Spring Security 
  - Each type has different levels of access to each feature of the application, e.g. only admins can add new employees
  - On adding new employees, the user will have a link sent to them where they can set a password
- **Testing**
  - Create unit and integration tests to the backend to make it more robust
- **Refactor**
  - Clean up the backend, so that the data flow from database to controller is more coherent
    - e.g. return values were different from each other when they shouldn't have been
- **Rework UI**
  - Give the application a nice design rather than the basic Bootstrap template

Here is a screenshot of the current version of the site:

<img src="https://github.com/prothy/javapeno/blob/master/docs/app-screenshot.png" height="auto" width=700/>
