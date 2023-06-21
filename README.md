# comp229_midterm

1. Before running the project, make sure you have the following installed on your system:

- Node.js

2. Install the dependencies: npm install

3. create a .env file in the project root and provide the following configuration and adjust the PORT value as needed

PORT=3000
MONGODB_URI=mongodb://localhost:27017/Student Information System

4. Start the MongoDB server.

5. Run the project: nodemon app.js

API Endpoints:
GET /students: Fetch all students.
GET /students/:id: Fetch a single student by ID.
POST /students: Add a new student.
PUT /students/:id: Update a student by ID.
DELETE /students/:id: Delete a student by ID.
