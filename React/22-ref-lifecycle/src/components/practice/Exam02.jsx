import { useRef, useState } from 'react';

export default function ColorComp() {
  const ref = useRef();
  const [color, setColor] = useState('');

  const changeColor = () => {
    setColor(ref.current.value);
    ref.current.value = '';
    ref.current.focus();
  };

  return (
    <div
      style={{
        backgroundColor: color,
        width: '200px',
        height: '80px',
        lineHeight: '30px',
        textAlign: 'center',
      }}
    >
      <input type="text" ref={ref} />
      <br />
      <button onClick={changeColor}>색 적용</button>
    </div>
  );
}
