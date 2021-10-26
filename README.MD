# ERP Application

This is an enterprise resource planning system that we are working on as our final project for school. We have completed two sprints so far, with each lasting a week. 

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

Currently, we are working on the third sprint, which will include the following:

- **Login and access control system**
  - There are three types of users, "user", "super user", and "admin"
  - Each type has different levels of access to each feature of the application, e.g. only admins can add new employees
  - On adding new employees, the user will have a link sent to them where they can set a password
- **Testing**
  - Create unit and integration tests to the backend to make it more robust. If we have time we will test the frontend with Jest
- **Refactor**
  - Rework some aspects of the backend, e.g. have only Models returned to the controller, rather than the Entity itself
- **Rework UI**
  - Give the application a nice design rather than the basic Bootstrap template
