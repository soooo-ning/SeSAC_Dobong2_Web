// if문을 이용해서 console창에 연령대별 단어 출력해보기
// let age = Number(prompt("나이를 입력해주세요!"));

// if (age >= 20) {
//   console.log("성인");
// } else if (age >= 17) {
//   console.log("고등학생");
// } else if (age >= 14) {
//   console.log("중학생");
// } else if (age >= 8) {
//   console.log("초등학생");
// } else {
//   console.log("유아");
// }

// // 시간대 오전오후 삼항연산자
// let now = new Date().getHours();

// now >= 0 && now < 12 ? console.log('오전') : console.log('오후');

// // 10000까지의 숫자 중 13의 배수이면서 홀수인 숫자
// for (let i = 1; i <= 10000; i++) {
//   if (i % 13 === 0 && i % 2 === 1) {
//     console.log(i)
//   }
// }

// function num() {
//   let i = Number(prompt("숫자를 입력해주세요!"));

//   if (i % 13 === 0 && i % 2 === 1) {
//     alert('13의 배수입니다.');
//   } else if (i % 13 !== 0) {
//     alert('13의 배수가 아닙니다.');
//   } else {
//     alert('홀수가 아닙니다.')
//   }
// }

// num();

// 0 ~ 100의 숫자 중에서 2 또는 5의 배수 총합 구하기
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0 && i % 5 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// 1 ~ 100 까지의 배열을 for 문을 사용해서 만들기
// 해당 배열의 합을 for, for of, foreach 사용해서 구하기
// let arr = [];
// for (let i = 1 ; i <= 100 ; i++) {
//     arr.push(i);
// }

// // for
// sum = 0;
// for (let i = 0 ; i < arr.length ; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// // for of
// sum1 = 0;
// for (let j of arr) {
//     sum1 += j;
// }
// console.log(sum1);

// // forEach
// sum2 = 0;
// arr.forEach(function(k, i, arr){
//     sum2 += k;
// });
// console.log(sum2);

// let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
// let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// // 두 배열에서 동일한 요소만을 가지는 배열 same 만들기
// let same = [];

// // 두 배열에서 서로 다른 요소만을 가지는 배열 diff 만들기
// let diff = [];

// for (let value of fruits1) {
//     if (fruits2.includes(value)) {
//         same.push(value);
//     } else diff.push(value)
// }

// console.log(same);
// console.log(diff);

// // 조건문을 사용해서 오늘이 주말인지 평일인지 출력

// // 삼항 연산자
// const checkDay = now.getDay() === 0 || now.getDay() === 6 ? '주말' : '평일';
// console.log(checkDay);

// // if
// if (now.getDay() === 0 || now.getDay() === 6) {
//   console.log("주말");
// } else console.log("평일");

// // switch
// switch (now.getDay()) {
//   case 0:
//     console.log("주말");
//     break;
//   case 6:
//     console.log("주말");
//     break;
//   default:
//     console.log("평일");
//     break;
// }

// // 0~1 사이의 랜덤한 숫자를 출력하는 프로그램
// // 0,10포함, Math 사용
// console.log('랜덤 숫자: ', Math.floor(Math.random() * 11));
