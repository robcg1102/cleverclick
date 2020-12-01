require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.log("Error al conectar: ", err);
  });

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mainRoutes = require("./routes/routes");
app.use("/api", mainRoutes);

app.listen(3001, () => {
  console.log("Conectado al puerto: 3001.");
});


