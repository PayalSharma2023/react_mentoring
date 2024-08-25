import Navbar from './navbar';
import NavbarItems from './navitem';
import Hero from './hero';
import {First, First2} from './text_img';
import ParentComponent from './props/parent'
import Counter from "./states/counter"
import App from './props/App';
import Mycomponent from './states/MyComponent';
// import react from react;

function DD() {
  return (
    <div>
      {/* <Navbar/>
      <Hero/>
      <First/>
      <First2/>
      <ParentComponent/> */}
      <Mycomponent/>
      <App/>
      <NavbarItems/>
      <ParentComponent/>
      <Counter/>
    </div>
  );
}

export default DD;
