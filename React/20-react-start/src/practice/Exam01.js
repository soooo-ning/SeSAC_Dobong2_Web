export function Exam01() {
  let name = '두두';
  let animal = '말티즈';

  const underlineStyle = {
    textDecoration: 'underline',
  };

  return (
    <div>
      <div>
        제 반려동물의 이름은 <span style={underlineStyle}>{name}</span>입니다
      </div>
      <div>
        <span style={underlineStyle}>{name}</span>는{' '}
        <span style={underlineStyle}>{animal}</span>입니다.
      </div>
    </div>
  );
}

export function Exam02() {
  return (
    <div>
      <h2>{3 + 5 === 8 ? '정답입니다!' : '오답입니다!'}</h2>
    </div>
  );
}

export function Exam03() {
  let a = 3;
  let b = 2;

  return (
    <div>
      <h2>{a > b && 'a가 b보다 큽니다.'}</h2>
    </div>
  );
}
