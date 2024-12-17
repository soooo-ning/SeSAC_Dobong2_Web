const express = require('express');
const db = require('./models');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.get('*', (req, res) => {
  res.render('404');
});

db.sequelize.sync({ force: false }).then(() => {
  console.log('DB연결 성공!');

  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/user`);
  });
});
