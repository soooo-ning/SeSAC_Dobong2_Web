function call(name, cb) {
  setTimeout(() => {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(() => {
    console.log('back');
    cb('back');
  }, 1000);
}

function hell(cb) {
  setTimeout(() => {
    cb('callback hell');
  }, 1000);
}

call('kim', name => {
  console.log(name + '반가워');
  back(txt => {
    console.log(txt + '을 실행했구나');
    hell(message => {
      console.log('여기는 ' + message);
    });
  });
});

// 콜백 함수로 이루어진 코드를 Promise로 변경
function call(name, cb) {
  setTimeout(() => {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(() => {
    console.log('back');
    cb('back');
  }, 1000);
}

function hell(cb) {
  setTimeout(() => {
    cb('callback hell');
  }, 1000);
}

call('kim', name => {
  console.log(name + '반가워');
  back(txt => {
    console.log(txt + '을 실행했구나');
    hell(message => {
      console.log('여기는 ' + message);
    });
  });
});

// Promise로 바꾼 코드를 exec 함수를 만들어 실행하게 하기

async function exec() {
  let user = await login('kim');
  console.log(user + '님 환영합니다.');
  let videos = await getVideo('kim');
  console.log(videos);
  let title = await getDetail(video[0]);
  console.log(title);
}

exec();
