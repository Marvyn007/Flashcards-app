import flashcards from './flashcards.json'
import Card from './Components/Card.jsx'
import { useState } from 'react'
import './App.css'

function App() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    if(index < flashcards.length-1){
      setIndex(index+1);
    }
  }

  const prevCard = () => {
    if(index > 0){
      setIndex(index-1);
    }
  }

  return (
    <div>
      {!started ? (
        <div className="start-screen">
          <h1>Welcome to Dog Flashcards 🐶</h1>
          <button className="go-btn" onClick={() => setStarted(true)}>Go ➡️</button>
        </div>
      ) : (
        <div className="card-view">
          <Card
            key={flashcards[index].id}
            index={index}
            question={flashcards[index].question}
            answer={flashcards[index].answer}
            image={flashcards[index].image}
          />

          <div className="nav-buttons">
            <button onClick={prevCard} disabled={index === 0}>⏪ Prev</button>
            <button onClick={nextCard} disabled={index === flashcards.length - 1}>Next ⏩</button>
            <button onClick={() => setStarted(false)}>Return</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
