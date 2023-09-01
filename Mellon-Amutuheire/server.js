const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const connectdb = require("./config/dbConfig");
const port = process.env.PORT || 3000;

const app = express();
const registerRoutes = require("./controllers/registerRoutes");


app.use(express.urlencoded({extended: true}));
app.use(express.json());



connectdb();





// setting up pug as our view engine
app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));



app.use(express.static(path.join(__dirname, "public")));


app.use("/api", registerRoutes)
connectdb();
app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
