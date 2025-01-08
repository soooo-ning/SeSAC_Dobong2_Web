import { Component, useState } from 'react';

export class HandlerEx extends Component {
  state = {
    text: 'Hello World',
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <h1>{text}</h1>
        <button
          onClick={() => {
            this.setState({ text: 'Goodbye World!' });
          }}
        >
          클릭
        </button>
      </div>
    );
  }
}

export function ColorComp() {
  const [text, setText] = useState('검정색');
  const [fontColor, setFontColor] = useState('black');

  const changeRed = () => {
    setText('빨간색');
    setFontColor('red');
  };

  const changeBlue = () => {
    setText('파란색');
    setFontColor('blue');
  };

  return (
    <div>
      <h1 style={{ color: fontColor }}>{text} 글씨</h1>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </div>
  );
}

export function HiddenComp() {
  const [view, setView] = useState(true);

  const changeView = () => {
    setView(!view);
  };

  return (
    <div>
      <button onClick={changeView}>{view ? '사라져라' : '보여라'}</button>
      <h1 style={{ display: view ? 'block' : 'none' }}>안녕하세요</h1>
    </div>
  );
}

export function EmojiComp() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <p className="state">
        {number}
        {number > 7 ? '😈' : '😊'}
      </p>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
}

export function ChangeObj({ objArr }) {
  const [member, setMember] = useState(0);

  const changeMember = () => {
    setMember((member + 1) % objArr.length);
  };

  return (
    <div>
      <div>이름:{objArr[member].name}</div>
      <div>나이:{objArr[member].age}</div>
      <div>별명:{objArr[member].nickName}</div>
      <button onClick={changeMember}>멤버 바꾸기</button>
    </div>
  );
}

export function PororoObj() {
  const pororoObjArr = [
    {
      name: '뽀로로',
      age: '7',
      nickName: '사고뭉치',
    },
    {
      name: '루피',
      age: '5',
      nickName: '공주님',
    },
    {
      name: '크롱',
      age: '4',
      nickName: '장난꾸러기',
    },
  ];

  return (
    <div>
      <ChangeObj objArr={pororoObjArr} />
    </div>
  );
}
