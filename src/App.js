import React, {useState} from 'react';
import './App.css';
import CharacterInfoPage from './CharacterInfoPage'

const App = () => {

  const [characterChoiceNumbers, setCharacterChoiceNumbers] = useState([1,2,3,4,5])
  const [chosenChoiceNumber, setChosenChoiceNumber] = useState(1)

  const handleChoiceChange = (newNumber) => {
    setChosenChoiceNumber(newNumber)
  }
  return(
    <div>
      <select onChange={(e)=> handleChoiceChange(e.target.value)}>
        {
          characterChoiceNumbers.map(choice => <option key={choice}>{choice}</option>)
        }
      </select>
      <CharacterInfoPage chosenChoiceNumber={chosenChoiceNumber}/>
    </div>
  )
  
}

export default App;
