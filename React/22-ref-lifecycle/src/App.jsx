import LifeCycleClass from './components/LifecycleClass';
import LifeCycleFunc from './components/LifecycleFunc';
import Container from './components/practice/Container';
import FakePost from './components/practice/FakePost';
import RealPost from './components/practice/RealPost';
import ColorComp from './components/practice/Exam02';
import { RefClass1, RefClass2 } from './components/RefClass';
import { RefFunc1, RefFunc2 } from './components/RefFunc';
import Test from './components/Test';

function App() {
  return (
    <div>
      {/* <RefClass1 />
      <RefClass2 /> */}
      {/* <RefFunc1 />
      <RefFunc2 /> */}
      <LifeCycleClass />
      <LifeCycleFunc />
      <Test />
      <Container>
        <FakePost />
        <RealPost />
      </Container>
      <ColorComp />
    </div>
  );
}

export default App;
