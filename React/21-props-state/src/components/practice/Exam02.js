import { Component } from 'react';

// 새로운 파일을 하나 만들어주세요. 그리고 본인이 좋아하는 음식을 소개하는 문구를 작성해주세요.
// food라는 props를 생성하세요.
// props 기본값을 설정하여 food에 값이 없을 때도 기본값이 출력되도록 해주세요.
// food props만 빨간색 출력되도록 설정해주세요.
export function FoodComp({ food }) {
  return (
    <div>
      좋아하는 음식: <span style={{ color: 'red' }}>{food}</span>
    </div>
  );
}

FoodComp.defaultProps = {
  food: '아이스티',
};

// 함수형 컴포넌트를 만드세요.
// title, author, price, type이란 props를 생성하세요.
// App.css에서 다음 사진과 비슷하게 출력되도록 클래스를 만들어주세요.
// import React from "react";
// import "../App.css";
// import book from "../book.jpg";

// export function FoodComp({ title, author, price, type }) {
//   return (
//     <div className="all">
//         <div className="best">이번주 베스트셀러</div>
//         <img src={book} className="book_img"></img>
//         <div className="title">{title}</div>
//         <div className="content">저자: {author}</div>
//         <div className="content">판매가: {price}</div>
//         <div className="content">구분: {type}</div>
//     </div>
// )
// }

// 클래스형 컴포넌트를 만드세요. 그리고, text, valid란 props를 생성하세요.
// App 컴포넌트에서 text를 받아와 출력하게 해주세요.
// 그리고 text 값을 받아오지 못하면 "이건 기본 text props입니다."라는 문구가 출력되게 해주세요.
// text에 문자를 필수 props로 지정해주세요.
// button을 만들고 onClick으로 valid를 지정해주세요.
// valid는 콘솔에 "콘솔 띄우기 성공!"이라는 메세지를 출력하도록 해주세요.
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class ClassProps2 extends Component {
//   render() {
//     const { name, color, nickname, fontColor } = this.props;
//     const divStyle = {
//       color: fontColor,
//       backgroundColor: color,
//     };
//     return (
//       <div style={divStyle}>
//         <h4>hi, {name}</h4>
//         <ul>
//           <li>별명: {nickname}</li>
//           <li>좋아하는 색: {color}</li>
//         </ul>
//       </div>
//     );
//   }
// }

// ClassProps2.defaultProps = {
//   fontColor: 'beige',
// };

// export { ClassProps, ClassProps2 };
// consoleFunc = () => {
//   console.log('콘솔 띄우기 성공!');
// };

// export class TextComp extends Component {
//   render() {
//     const { text, valid } = this.props;

//     return (
//       <div>
//         <p>{text}</p>
//         <button onClick={consoleFunc(valid)}>콘솔 메세지</button>
//       </div>
//     );
//   }
// }
