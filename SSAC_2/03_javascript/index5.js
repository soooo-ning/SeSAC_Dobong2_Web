/* for문
 for(변수 선언과 초기화; 조건식(어디까지 감소, 증가할건지); 증감) {
    반복 실행 코드
 }
 */

// 증감식: i++, i=i+1, i+=1
for (let i = 0; i < 10; i++) {
  console.log('안녕', i);
}

for (let i = 0; i < 10; i += 2) {
  console.log(`안녕 ${i}`);
}

// 1~5까지 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
for (let i = 1; i < 6; i++) {
  console.log(i);
}
for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

// 5~1까지 출력
for (let i = 5; i > 0; i--) {
  console.log(i);
}

let fruits = ['apple', 'banana', 'orange', 'mango'];
console.log(fruits.length);
// fruits 전체 요소 for문을 이용해서 출력
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// quiz!
// 1~n까지 더하기
let n = 11;
let sum = 0;
// 반복문을 사용해서 덧셈 만들기
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

// quiz - 배열 내부의 합 구하기
let arr = [99, 98, 85, 77, 100, 50];
let sum2 = 0;
for (let i = 0; i < arr.length; i++) {
  sum2 += arr[i];
}
console.log(sum2);


// 1 이상 20 이하의 수 중에서 짝수만 더한 값 출력하기
let sum3 = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum3 += i;
  }
}
console.log(sum3);

let sum4 = 0;
for (let i = 0; i <= 20; i += 2) {
  sum4 += i;
}
console.log(sum4);