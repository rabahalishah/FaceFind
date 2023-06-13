const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const app = express();
const knex = require("knex");

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: "",
  connection: {
    host: "127.0.0.1",
    port: "ENTER YOUR DATABASE PORT HERE",
    user: "YOUR USER NAME",
    password: "YOUR PASSWORD",
    database: "YOUR DATABASE NAME",
  },
});

//HERE YOU MUST HAVE TO ENTER YOUR TABLE NAME. IF YOU WILL MAKE CHANGE HERE YOU WILL HAVE TO MAKE CHANGES IN THE CONTROLLERS FILE TOO
db.select("*")
  .from("users")   
  .then((data) => {
    // console.log(data);
  });

const port = 3000;

// Since body parser  and cors are middleware so,
app.use(bodyParser.json());
app.use(cors());

// Routing
app.get("/", (req, res) => { res.status(200).send('This App is woking!')});

app.post("/signin", signin.handleSignin(db, bcrypt));

app.post("/register", (req, res) => {register.handleRegister(req, res, db, bcrypt)}); //this technique is called dependency injection.

app.get("/profile/:id", profile.handleProfileGet(db));

app.put("/image", image.handleImage(db));

app.post("/imageurl", (req, res) => {image.handleApiCall(req, res)}); 

// Listening port
app.listen(process.env.PORT || port, () => {
  console.log(`This app listening on port ${process.env.PORT}`);
});

