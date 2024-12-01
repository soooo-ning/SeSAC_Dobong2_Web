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

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, 'uploads/');
    },
    filename: function (req, file, done) {
      const extension = path.extname(file.originalname);
      const filename = `${req.body.id || 'default'}${extension}`;
      done(null, filename);
    },
  }),

  limits: { fieldSize: 5 * 1024 * 1024 },
});

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
  const { id, password, name, age } = req.body;
  const profile = req.file.filename;
  console.log(req.body);
  console.log(req.file);

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
