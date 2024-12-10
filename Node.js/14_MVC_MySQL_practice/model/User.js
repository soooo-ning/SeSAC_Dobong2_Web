// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'sesac',
  password: '1234',
  database: 'sesac',
});

// 회원가입
exports.postSignUp = (data, cb) => {
  conn.query(
    `INSERT INTO user VALUES(null, '${data.userid}', '${data.pw}', '${data.name}')`,
    (err, rows) => {
      if (err) throw err;
      console.log('user post', rows);
      cb();
    },
  );
};

// 로그인
exports.postSignIn = (data, cb) => {
  conn.query(
    `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}' LIMIT 1`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log('user 조회', rows);
      cb(rows);
    },
  );
};

// 유저 조회
exports.postUser = (userid, cb) => {
  conn.query(
    `SELECT * FROM user WHERE userid='${userid}' LIMIT 1`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log('user profile 조회', rows);
      cb(rows);
    },
  );
};

// 회원정보 수정
exports.patchUser = (data, cb) => {
  conn.query(
    `UPDATE user
    SET pw='${data.pw}', name='${data.name}'
    WHERE id=${data.id}`,
    (err, rows) => {
      if (err) throw err;
      console.log('User.js 데이터 수정', rows);
      cb();
    },
  );
};

// 회원 삭제
exports.deleteUser = (id, cb) => {
  conn.query(`DELETE FROM user WHERE id='${id}'`, (err, rows) => {
    if (err) throw err;
    console.log('User.js 데이터 삭제');
    cb();
  });
};
