import logo from './logo.svg';
import './App.css';
import Jacket from './Jacket';
import Pants from './Pants';
import Shirt from '/Shirt';
import Shoes from '/Shoes';

function App() {
  return (
    <div >
      <Jacket countOne = {10}/>
      <Pants countTwo = {11}/>
      <Shirt countThree = {12}/>
      <Shoes countFour = {13}/>
    </div>
    
  );
}

export default App;
