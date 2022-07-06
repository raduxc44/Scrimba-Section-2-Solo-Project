import './App.css';
import Nav from './nav';
import Card from './card';


function App() {
  return (
    <div className="App">
      <Nav />
      <div className='card-container'>
        <Card />
      </div>
    </div>
  );
}

export default App;
