const connectDB = require("./db/connect");

const express = require("express");
const app = express();

const tasks = require("./routes/tasks"); // also a middleware
const port = 3000;
require("dotenv").config(); // used the gitignore feature

// Middleware
app.use(express.static("./public"));
app.use(express.json()); // this is to use req.body feature like body parser // GET

app.use("/api/v1/tasks", tasks); //   Get all

app.use("/api/v1/tasks", tasks); //   POST

app.use("/api/v1/tasks", tasks); // SINGLE GET   routes wale iske baad add honge url pe....... idhar bhi dene se chlega

app.use("/api/v1/tasks", tasks); // PATCH

app.use("/api/v1/tasks", tasks); // DELETE

const start = async () => {
  // open server only if datbase has been connected else chodo , so we used await and async
  try {
    await connectDB(process.env.MONGO_URI); // name of the variable in .env file mentioned in gitignore
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
