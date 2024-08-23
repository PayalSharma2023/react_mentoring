import Navbar from './navbar';
import Hero from './hero';
import {First, First2} from './text_img';
import ParentComponent from './props/parent'
import Counter from "./states/counter"
// import react from react;

function App() {
  return (
    <div>
      {/* <Navbar/>
      <Hero/>
      <First/>
      <First2/>
      <ParentComponent/> */}
      <ParentComponent/>
      <Counter/>
    </div>
  );
}

export default App;
