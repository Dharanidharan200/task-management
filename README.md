# Task Manager

## Features

* View all tasks
* Add a new task
* Delete a task
* Data stored in `tasks.json`

## Technologies Used

### Frontend

* React
* CSS

### Backend

* Node.js
* Express.js

---

## Project Structure

```text
task-manager/
│
├── backend/
│   ├── server.js
│   ├── tasks.json
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
└── README.md
```

---

## Prerequisites

* Node.js
* npm

---

## Run Backend

```bash
cd backend
npm install
npm start
```

Backend runs at:

``` text http://localhost:5000 ```

---

## Run Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs at:

```text http://localhost:3000 ```

---

## API Endpoints

### Get All Tasks

```http GET /api/tasks ```

### Add Task

```http POST /api/tasks ```

Request Body:

```json
{
  "title": "Learn React"
}
```

### Delete Task

```http DELETE /api/tasks/:id ```

---

## Data Storage

Tasks are saved in:

```text backend/tasks.json ```

---

## Author

Dharanidharan H
