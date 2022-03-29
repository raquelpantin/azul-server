const express = require("express");
const dotenv = require("dotenv").config();
const artistRoutes = require("./routes/artists");
const { errorHandler } = require("./middleware/errorMiddleware");

const port = process.env.PORT || 8000;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/artist", artistRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}`));
