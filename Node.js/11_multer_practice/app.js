const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/static', express.static(__dirname + '/public'));
app.use('/uploads', express.static(__dirname + '/uploads'));

// 회원가입 일반 폼 전송에 파일 업로드 연결하기 (form submit)
// 이 때, 업로드 할 파일은 프로필 사진!
// 업로드 된 파일은 "uploads/유저아이디.확장자"로 저장하기
// 업로드 후 결과 페이지에서 업로드 된 이미지 보여주기

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, 'uploads/');
    },
    filename: function (req, file, done) {
      const extension = path.extname(file.originalname);
      const filename = `${req.body.id}${extension}`;
      done(null, filename);
    },
  }),

  limits: { fieldSize: 5 * 1024 * 1024 },
});

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const { id, password, name, age } = req.body;
  const profile = req.file.filename;

  res.render('result', {
    id,
    password,
    name,
    age,
    profile,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
