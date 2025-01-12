import Alphabet from './components/Alphabet';
import { ClassProps, ClassProps2 } from './components/ClassProps';
import ClassState from './components/ClassState';
import Counter from './components/Counter';
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from './components/FunctionProps';
import FunctionState from './components/FunctionState';
import SyntheticEvent from './components/SyntheticEvent';
import EntirePractice from './components/practice/EntirePractice';
import {
  ColorComp,
  EmojiComp,
  HandlerEx,
  HiddenComp,
  PororoObj,
} from './components/practice/Exam03';

function App() {
  return (
    <div>
      {/* Props */}
      <h2>Props 사용</h2>
      <h3>클래스형 컴포넌트 props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps2
        name="루피"
        color="pink"
        nickname="공주"
        // fontColor="blue"
      />
      <h3>함수형 컴포넌트 props 사용해보기</h3>
      <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="사과" number={5} krPrice={10000} />
      <FunctionProps3 name="샤인머스캣" number={1} krPrice={15000} />
      <FunctionProps4 name="딸기" number={1} krPrice={20000}>
        <span style={{ color: 'red' }}>children 요소입니다!!!!</span>
      </FunctionProps4>
      <FunctionProps4 name="딸기">
        <span style={{ color: 'red' }}>children요소입니다!!!!</span>
      </FunctionProps4>

      {/* State */}
      <h2>State</h2>
      <h3>클래스형 state</h3>
      <ClassState />
      <h3>함수형 state</h3>
      <FunctionState />
      <h2>event</h2>
      <SyntheticEvent />
      <Counter />

      {/* Exam */}
      {/* <h2>실습 1</h2>
      <ClassComp />
      <br />
      <FunctionComp /> */}
      {/* <h2>실습 2</h2>
      <FoodComp /> */}
      {/* <h2>실습 3</h2>
      <Props
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      />
      <Props text="App 컴포넌트에서 넘겨준 text props입니다." valid={my_func} /> */}
      <h2>이벤트 핸들링 실습1</h2>
      <HandlerEx />
      <h2>이벤트 핸들링 실습2</h2>
      <ColorComp />
      <h2>이벤트 핸들링 실습3</h2>
      <HiddenComp />
      <h2>추가 실습1</h2>
      <EmojiComp />
      <h2>추가 실습2</h2>
      <PororoObj />
      <EntirePractice />
      <h2>실습문제!!</h2>
      <PropsMap arr={arr} />
      <PropsMap2 arr={arr} />
      <PropsMap2 />
      <Alphabet />
      <MapPractice2 />
    </div>
  );
}

export default App;
