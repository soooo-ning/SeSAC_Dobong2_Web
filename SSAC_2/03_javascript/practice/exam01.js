// if문을 이용해서 console창에 연령대별 단어 출력해보기
let age = Number(prompt("나이를 입력해주세요!"));

if (age >= 20) {
  console.log("성인");
} else if (age >= 17) {
  console.log("고등학생");
} else if (age >= 14) {
  console.log("중학생");
} else if (age >= 8) {
  console.log("초등학생");
} else {
  console.log("유아");
}

// 시간대 오전오후 삼항연산자
let now = new Date().getHours();

now >= 0 && now < 12 ? console.log('오전') : console.log('오후');

// 10000까지의 숫자 중 13의 배수이면서 홀수인 숫자
for (let i = 1; i <= 10000; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i)
  }
}

function num() {
  let i = Number(prompt("숫자를 입력해주세요!"));

  if (i % 13 === 0 && i % 2 === 1) {
    alert('13의 배수입니다.');
  } else if (i % 13 !== 0) {
    alert('13의 배수가 아닙니다.');
  } else {
    alert('홀수가 아닙니다.')
  }
}

num();

// 0 ~ 100의 숫자 중에서 2 또는 5의 배수 총합 구하기
let sum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0 && i % 5 == 0) {
    sum += i;
  }
}
console.log(sum);
