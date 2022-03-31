const express = require("express");
const dotenv = require("dotenv").config();
const artistRoutes = require("./routes/artists");
const userRoutes = require("./routes/user");
const { errorHandler } = require("./middleware/errorMiddleware");
const colors = require("colors");
const connectDB = require("./config/db");
const cors = require("cors");

const port = process.env.PORT || 8000;

const app = express();

connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/artist", artistRoutes);
app.use("/user", userRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}`));
