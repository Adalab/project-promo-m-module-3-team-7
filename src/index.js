const express = require("express");
const cors = require("cors");

// create and config server
const server = express();
server.use(cors());
server.use(express.json({ limit: "10mb" }));
server.set("view engine", "ejs");

// init express aplication
const serverPort = process.env.port || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const serverStaticPath = "./public";
server.use(express.static(serverStaticPath));

//database
const Database = require("better-sqlite3");
const db = new Database("./src/data/database.db", {
  verbose: console.log,
});

server.get("/card/:id", (req, res) => {
  const query = db.prepare(`SELECT * FROM users WHERE id= ?`);
  const cardData = query.get(req.params.id);
  console.log(cardData);

  res.render("views/card", cardData);
});

server.post("/card/", (req, res) => {
  const query = db.prepare(
    `SELECT * FROM users WHERE palette= ? AND name = ? AND job = ? AND email = ? AND phone = ? AND linkedin = ? AND github = ? AND photo = ?`
  );

  const foundUser = query.get(
    req.body.name,
    req.body.palette,
    req.body.job,
    req.body.email,
    req.body.phone,
    req.body.linkedin,
    req.body.github,
    req.body.photo
  );

  let responseError = "";
  console.log(foundUser);

  if (foundUser.name === "") {
    response.success = false;
    responseError = "Missing name";
  } else if (isNaN(parseInt(foundUser.palette))) {
    response.success = false;
    responseError = "Missing palette";
  } else if (foundUser.job === "") {
    response.success = false;
    responseError = "Missing job";
  } else if (foundUser.email === "") {
    response.success = false;
    responseError = "Missing email";
  } else if (foundUser.phone === "") {
    response.success = false;
    responseError = "Missing phone";
  } else if (foundUser.linkedin === "") {
    response.success = false;
    responseError = "Missing linkedin";
  } else if (foundUser.github === "") {
    response.success = false;
    responseError = "Missing github";
  } else if (foundUser.photo === "") {
    response.success = false;
    responseError = "Missing photo";
  } else {
    response.success = true;
    response.cardURL =
      "https://awesomeprofilecards.herokuapp.com/card/" +
      result.lastInsertRowid;
  }
  res.json({ error: responseError });

  console.log(foundUser);

  console.log("Peticin en /card");
  console.log(req.body);
  const response = {};

  res.json({ response });
});
