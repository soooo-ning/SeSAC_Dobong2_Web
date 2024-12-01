// 기존 콜백 코드
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

// 콜백 함수로 이루어진 코드를 Promise로 변경하기
function callPromise(name) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function backPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('back');
      resolve('back');
    }, 1000);
  });
}

function hellPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('callback hell');
    }, 1000);
  });
}

callPromise('kim')
  .then(result => {
    console.log(result + ' 반가워');
    return backPromise();
  })
  .then(txt => {
    // txt = 이전 then의 리턴값 = "back"
    console.log(txt + '을 실행했구나');
    return hellPromise();
  })
  .then(msg => {
    console.log('여기는 ' + msg);
  });

// Promise로 바꾼 코드를 exec함수를 만들어서 실행
async function exec() {
  const name = await callPromise('allie');
  console.log(name + '반가워');
  const back = await backPromise();
  console.log(back + '을 실행했구나');
  const hell = await hellPromise();
  console.log('여기는 ' + hell);
}

exec();
