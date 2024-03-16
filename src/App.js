import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Training from './components/Trainings/Training';

// data from server;

const products = [
  {
    id: 1,
    name: "Toy car",
    price: "$12.59",
    desc: "This is a plastic toy car with remote control"
  },
  {
    id: 2,
    name: "Toy car",
    price: "$12.59",
    desc: "This is a plastic toy car with remote control"
  },
  {
    id: 3,
    name: "Toy car",
    price: "$12.59",
    desc: "This is a plastic toy car with remote control"
  },
  {
    id: 4,
    name: "Toy car",
    price: "$12.59",
    desc: "This is a plastic toy car with remote control"
  }
]

const appName = "Traning App";

const visible = true;


function App() {
  return (
    <div className="App">
      <h1>this is our {appName}</h1>
      { visible ? <p>it is visible</p> : <p>not visible</p>}
      <Home productList={products} visible={visible} />
      <Training />
      <About color={"red"} name={"tejj"}/>
    </div>
  );
}

export default App;
