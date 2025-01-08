import { Component, useState } from 'react';

// 클래스형 컴포넌트를 만들어주세요.
// 숫자의 초깃값은 0으로 설정해주세요.
// +2 라는 버튼을 만들고, 이 버튼을 클릭했을 시 숫자가 2씩 증가하도록 해주세요.
// -1 이라는 버튼을 만들고, 이 버튼을 클릭했을 시 숫자가 1씩 감소하도록 해주세요.
class ClassComp extends Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;

    return (
      <div>
        <p>{number}</p>
        <button
          onClick={() => {
            this.setState({ number: number + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

// 함수형 컴포넌트를 만들어주세요.
// 숫자의 초깃값은 0으로 설정해주세요.
// increase라는 함수를 만들고 1씩 증가하는 역할을 하도록 해주세요.
// decrease라는 함수를 만들고 2씩 감소하는 역할을 하도록 해주세요.
function FunctionComp() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    setNumber(prevState => {
      return prevState - 2;
    });
  };

  return (
    <div>
      <p className="state">{number}</p>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
    </div>
  );
}

export { ClassComp, FunctionComp };
