const express = require("express");
const cors=require("cors")
const app = express();

const taskRoutes=require("./routes/taskRoutes")

const requestLogger=require("./middlewares/requestLogger")

const authRoutes=require("./routes/authRoutes");

const errorHandler=require("./middlewares/errorHandler")

app.use(cors());
app.use(express.json())

app.use(requestLogger);

app.get("/", (req, res) => {
    res.send("Task Manager API is running");
});

app.use("/api/auth", authRoutes);

app.use('/api/tasks',taskRoutes);

app.use(errorHandler);

module.exports = app;