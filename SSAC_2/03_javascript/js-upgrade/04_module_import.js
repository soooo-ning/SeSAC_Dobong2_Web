// import/export 방식으로 모듈을 가져올 때는
// package.json의 type 이 module로 되어 있어야 함

// export 를 이용해 내보내진 데이터들 불러오는 방법
// import { 가져올데이터이름1, .. } from '파일경로명.js'

// require과 마찬가지로 가져올 데이터만 가져와도 됨
import { getNumber, numberData } from './04_module01';

console.log(numberData);
console.log(getNumber());

import { animals } from './04_module02';

console.log(animals);
showAnimals();

// export default 로 되어있는 모듈 가져오기
import sayHi from './04_module03';
sayHi();
