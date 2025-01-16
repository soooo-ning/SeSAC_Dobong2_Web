const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const PORT = 8080;

app.set('view engine', 'ejs');

// TODO: 쿠키 미들웨어 설정
app.use(cookieParser('secret'));

app.get('/', (req, res) => {
  // TODO: 쿠키값 가져오기 및 index.ejs에 보내기
  console.log('cookies', req.signedCookies.pop);
  res.render('index', { popup: req.signedCookies.popup });
});

app.post('/setCookie', (req, res) => {
  // TODO: 쿠키 생성하기
  res.cookie('popup', 'hide', {
    signed: true,
    maxAge: 1000 * 60 * 60 * 24,
  });
  res.send('쿠키 생성');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
