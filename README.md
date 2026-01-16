💰 Expense Tracker Application

(Java Spring Boot + React + MySQL)

A full-stack Expense Tracker Application built to help users manage daily expenses, categories, and spending analytics. The application provides secure user authentication, optimized REST APIs, and an interactive dashboard for expense analysis.

🚀 Live Demo :- https://gauravdhayade.github.io/expense-tracker/

🛠️ Tech Stack
🔹 Backend

Java
Spring Boot
Spring MVC
Spring Data JPA (Hibernate)
REST APIs
JWT Authentication
Maven

🔹 Frontend
React.js
React Hooks
Axios
HTML5, CSS3, JavaScript

🔹 Database
MySQL
SQL (Joins, Indexing, Optimization)

🔹 Tools
Git, GitHub
Postman
VS Code

✨ Key Features

🔐 Secure user registration & login (JWT-based authentication)

📂 Expense category management

➕ Add, update, delete expenses

📅 Filter expenses by date and category

📊 Expense analytics & summaries

⚡ Optimized REST APIs with response time < 250ms

📱 Fully responsive UI

📂 Project Structure
Backend (Spring Boot)
expense-tracker-backend/
│── controller/
│── service/
│── repository/
│── dto/
│── entity/
│── security/
│── exception/
└── ExpenseTrackerApplication.java

Frontend (React)
expense-tracker-frontend/
│── components/
│── pages/
│── services/
│── context/
│── App.js
└── index.js

🔗 API Overview (Sample)
Method	Endpoint	Description
POST	/api/auth/register	User Registration
POST	/api/auth/login	User Login
GET	/api/expenses	Fetch all expenses
POST	/api/expenses	Add new expense
PUT	/api/expenses/{id}	Update expense
DELETE	/api/expenses/{id}	Delete expense
⚙️ How to Run Locally
1️⃣ Backend Setup
git clone https://github.com/Gauravdhayade/expense-tracker.git
cd expense-tracker/backend


Configure application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/expense_db
spring.datasource.username=root
spring.datasource.password=your_password


Run the application

mvn spring-boot:run

2️⃣ Frontend Setup
cd frontend
npm install
npm start

🧠 Concepts Demonstrated

RESTful API design

JWT-based authentication & authorization

Layered architecture (Controller → Service → Repository)

DTO validation & exception handling

Database schema design & optimization

React state management using Hooks & Context API

📸 Screenshots

Add screenshots for:

Login / Register

Expense Dashboard

Analytics View

🔮 Future Enhancements

Export expenses to PDF / Excel

Monthly budget limits & alerts

Admin dashboard

Cloud deployment (AWS)

Unit & Integration testing (JUnit, Mockito)

👨‍💻 Author

Gaurav Dhayade
Java Full Stack Developer
🔗 GitHub: https://github.com/Gauravdhayade
📧 Email: gdhayade123@gmail.com
