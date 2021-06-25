const express = require('express');
const cors = require('cors');

// create and config server
const server = express();
server.use(cors());
server.use(express.json({ limit: '10mb' }));
server.set('view engine', 'ejs');

// init express aplication
const serverPort = process.env.port || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const serverStaticPath = './public';
server.use(express.static(serverStaticPath));

//database
const Database = require('better-sqlite3');
const db = new Database('./src/data/database.db', {
  verbose: console.log,
});

server.get('/card/:id', (req, res) => {
  const query = db.prepare(`SELECT * FROM users`);
  const cardData = query.all();
  console.log(cardData);

  res.render('views/card', cardData);
});

server.post('/card/', (req, res) => {
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

  if (foundUser === undefined) {
    res.json({ error: 'Completa todos los datos' });
  } else {
    res.json({ id: foundUser.id });
  }

  console.log(foundUser);

  /*console.log('Peticin en /card');
  console.log(req.body);
  const response = {};

  if (req.body.name === '') {
    response.success = false;
    response.error = 'Missing name';
  } else if (isNaN(parseInt(req.body.palette))) {
    response.success = false;
    response.error = 'Missing palette';
  } else if (req.body.job === '') {
    response.success = false;
    response.error = 'Missing job';
  } else if (req.body.email === '') {
    response.success = false;
    response.error = 'Missing email';
  } else if (req.body.phone === '') {
    response.success = false;
    response.error = 'Missing phone';
  } else if (req.body.linkedin === '') {
    response.success = false;
    response.error = 'Missing linkedin';
  } else if (req.body.github === '') {
    response.success = false;
    response.error = 'Missing github';
  } else if (req.body.photo === '') {
    response.success = false;
    response.error = 'Missing photo';
  } else {
    response.success = true;
    response.cardURL = '';
  }

  res.json({ response });

  */
});
