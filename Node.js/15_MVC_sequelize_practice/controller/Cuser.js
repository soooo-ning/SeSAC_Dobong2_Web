const models = require('../models');
const { errorlogs } = require('../utils/common');

// GET /user 회원가입, 로그인 링크 보여주기
exports.home = (req, res) => {
  res.render('index');
};

// GET /user/signup 회원가입 페이지 렌더
exports.getSignUp = (req, res) => {
  res.render('signup');
};

// POST /user/signup 회원가입
exports.postSignUp = (req, res) => {
  // User.postSignUp(req.body, () => {
  //   console.log(req.body);
  //   res.send('회원가입 완료');
  // });

  // `INSERT INTO user VALUES(null, '${data.userid}', '${data.pw}', '${data.name}')`
  models.User.create({
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
  })
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      errorlogs(
        err,
        'SignUp Error',
        '회원가입 중 오류가 발생했습니다.',
        500,
        res,
      );
    });
};

// GET /user/signin 로그인 페이지 렌더
exports.getSignIn = (req, res) => {
  res.render('signin');
};

// POST /user/signin 로그인
exports.postSignIn = async (req, res) => {
  // User.postSignIn(req.body, result => {
  //   console.log(req.body);

  //   if (result.length > 0) {
  //     res.send(true);
  //   } else {
  //     res.send(false);
  //   }
  // });

  // `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}' LIMIT 1`,
  try {
    const result = await models.User.findOne({
      where: {
        userid: req.body.userid,
        pw: req.body.pw,
      },
    });
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('서버 에러가 발생했습니다.');
  }
};

// POST /user/profile 회원정보 수정 페이지 / 유저조회
exports.postUser = async (req, res) => {
  // console.log(req.body); //{userid: ~}
  // User.postUser(req.body.userid, result => {
  //   if (result.length > 0) {
  //     res.render('profile', { data: result[0] }); // 프로필 렌더링
  //   } else {
  //     res.status(404).send('사용자 정보를 찾을 수 없습니다.');
  //   }
  // });

  // `SELECT * FROM user WHERE userid='${userid}' LIMIT 1`,
  try {
    console.log(req.body); //{userid: ~}
    const user = await models.User.findOne({
      where: {
        userid: req.body.userid,
      },
    });

    if (user) {
      res.render('profile', { data: user });
    } else {
      res.status(404).send('사용자 정보를 찾을 수 없습니다.');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('서버 에러가 발생했습니다.');
  }
};

// PATCH /user/profile/edit 회원정보 수정
exports.patchUser = async (req, res) => {
  // User.patchUser(req.body, () => {
  //   res.send('수정 완료');
  // });

  // `UPDATE user
  // SET pw='${data.pw}', name='${data.name}'
  // WHERE id=${data.id}`

  try {
    const [result] = await models.User.update(
      {
        pw: req.body.pw,
        name: req.body.name,
      },
      {
        where: {
          id: req.body.id,
        },
      },
    );
    console.log(result); // [1], [0]
    // const [number] = result;
    // console.log(number);

    if (Boolean(result)) {
      res.send('수정 완료');
    } else {
      res.send('잘못된 접근입니다.');
    }
  } catch (err) {
    // errorlogs(
    //   res,
    //   err,
    //   "patch controller 내부",
    //   "수정 에러가 났어요",
    //   500,
    // );
    errorlogs(res, err, 'patch controller 내부');
  }
};

// DELETE /user/profile/delete 회원 삭제
exports.deleteUser = async (req, res) => {
  // User.deleteUser(req.body.id, () => {
  //   res.send(req.body.id + '번 삭제완료');
  // });

  // `DELETE FROM user WHERE id='${id}'`
  try {
    const result = await models.User.destroy({
      where: { id: req.body.id },
    });
    console.log(result);
    if (Boolean(result)) {
      res.send(req.body.id + '번 id 삭제완료');
    } else {
      res.send('잘못된 접근입니다!!');
    }
  } catch (err) {
    errorlogs(res, err);
  }
};
