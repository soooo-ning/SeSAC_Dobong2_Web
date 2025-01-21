const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.main = (req, res) => {
  try {
    const user = req.session.user;

    if (user) {
      res.render('index', { isLogin: true, user: user });
    } else {
      res.render('index', { isLogin: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('서버 에러가 발생했습니다.');
  }
};

exports.getSignUp = (req, res) => {
  res.render('signup');
};

exports.postSignUp = async (req, res) => {
  try {
    const saltRounds = 10;
    const hashPw = bcrypt.hashSync(req.body.pw, saltRounds);
    const user = await User.create({
      userid: req.body.userid,
      pw: hashPw,
      name: req.body.name,
    });

    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('서버 에러가 발생했습니다.');
  }
};

exports.getLogin = async (req, res) => {
  try {
    const user = req.session.user;

    if (user) {
      res.redirect('/');
    } else {
      res.render('login');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('서버 에러가 발생했습니다.');
  }
};

exports.postLogin = async (req, res) => {
  try {
    const userInfo = await User.findOne({
      where: {
        userid: req.body.userid,
      },
    });

    if (!userInfo) {
      return res.json(false);
    }

    const comparePw = bcrypt.compareSync(req.body.pw, userInfo.pw);

    if (comparePw) {
      req.session.user = req.body.userid;
      res.json(true);
    } else {
      res.json(false);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('서버 에러가 발생했습니다.');
  }
};

exports.getLogout = (req, res) => {
  try {
    const user = req.session.user;

    if (user) {
      req.session.destroy(err => {
        if (err) throw err;
        res.send(`
          <script>
            alert("로그아웃이 완료되었습니다.");
            document.location.href="/";
          </script>
        `);
      });
    } else {
      res.send(`
      <script>
        alert("이미 세션이 만료되었습니다.");
        document.location.href="/";
      </script>
      `);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('서버 에러가 발생했습니다.');
  }
};
