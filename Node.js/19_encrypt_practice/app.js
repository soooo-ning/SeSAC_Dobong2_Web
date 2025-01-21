require('dotenv').config();
const express = require('express');
const session = require('express-session');
const db = require('./models');
const app = express();
const PORT = process.env.PORT;
const userRouter = require('./routes/user');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 1,
    },
  }),
);

app.use('/', userRouter);
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
