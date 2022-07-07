import './App.css';
import Nav from './nav';
import Card from './card';
import data from './data';

function App() {
  let cards = data.map(card => {
    return(
      <Card 
        key={card.id}
        {...card}
      />
    )
  })
  return (
    <div className="App">
      <Nav />
      <div className='card-container'>
        {cards}
      </div>
    </div>
  );
}

export default App;
