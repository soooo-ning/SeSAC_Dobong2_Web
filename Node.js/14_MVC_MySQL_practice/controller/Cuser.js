// TODO: 컨트롤러 코드
const User = require('../model/User');

// GET /user 회원가입, 로그인 링크 보여주기
exports.home = (req, res) => {
  res.render('index');
};

// GET /user/signup 회원가입 페이지 렌더
exports.getSignUp = (req, res) => {
  res.render('signup');
};

// POST /user/signup 새로운 회원 생성
exports.postSignUp = (req, res) => {
  User.postSignUp(req.body, () => {
    console.log(req.body);
    res.send('회원가입 완료');
  });
};

// GET /user/signin 로그인 페이지 렌더
exports.getSignIn = (req, res) => {
  res.render('signin');
};

// POST /user/signin 로그인 회원 조회
exports.postSignIn = (req, res) => {
  User.postSignIn(req.body, result => {
    console.log(req.body);

    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

// POST /user/profile 회원정보 수정 페이지
exports.postUser = (req, res) => {
  console.log(req.body); //{userid: ~}
  User.postUser(req.body.userid, result => {
    if (result.length > 0) {
      res.render('profile', { data: result[0] }); // 프로필 렌더링
    } else {
      res.status(404).send('사용자 정보를 찾을 수 없습니다.');
    }
  });
};

// PATCH /user/profile/edit 회원정보 수정
exports.patchUser = (req, res) => {
  User.patchUser(req.body, () => {
    res.send('수정 완료');
  });
};

// DELETE /user/profile/delete 회원 삭제
exports.deleteUser = (req, res) => {
  User.deleteUser(req.body.id, () => {
    res.send(req.body.id + '번 삭제완료');
  });
};
