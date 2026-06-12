const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const FILE_PATH = "./tasks.json";

// GET Tasks
app.get("/api/tasks", async (req, res) => {
    try {
        const data = await fs.readFile(FILE_PATH, "utf8");
        const tasks = JSON.parse(data);

        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error reading tasks" });
    }
});

// POST Task
app.post("/api/tasks", async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({
                message: "Title is required"
            });
        }

        const data = await fs.readFile(FILE_PATH, "utf8");
        const tasks = JSON.parse(data);

        const newTask = {
            id: uuidv4(),
            title,
            isCompleted: false
        };

        tasks.push(newTask);

        await fs.writeFile(
            FILE_PATH,
            JSON.stringify(tasks, null, 2)
        );

        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({
            message: "Error saving task"
        });
    }
});

app.delete("/api/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const data = await fs.readFile(FILE_PATH, "utf8");
        const tasks = JSON.parse(data);

        const updatedTasks = tasks.filter(
            (task) => task.id !== id
        );

        await fs.writeFile(
            FILE_PATH,
            JSON.stringify(updatedTasks, null, 2)
        );

        res.status(200).json({
            message: "Task deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting task"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});