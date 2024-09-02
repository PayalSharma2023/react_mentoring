import Navbar from './navbar';
import NavbarItems from './navitem';
import Hero from './hero';
import {First, First2} from './text_img';
import ParentComponent from './props/parent'
import Counter from "./states/counter"
import App from './hooks/useState';
import Mycomponent from './states/MyComponent';
import Conditional from './conditional';
import ItemList from './List';
// import react from react;

function DD() {
  const items = [
      {id: 1, name: 'Item 1', price: 10},
      {id: 2, name: 'Item 2', price: 15},
      {id: 3, name: 'Item 3', price: 20},
      {id: 4, name: 'Item 4', price: 25},
      {id: 5, name: 'Item 5', price: 30}
    ]

  return (
    <div>
      
      {/* <Conditional/> */}
      <ItemList items={items}/>
      <App/>
      <Conditional/>
      
    </div>
  );
  

}

export default DD;
