import React from 'react';
import './App.css';
import CharacterInfoPage from './CharacterInfoPage'

class App extends React.Component {
  state = {
    characterChoiceNumbers: [1,2,3,4,5],
    chosenChoiceNumber: 1
  }

  handleChoiceChange = (newNumber) => {
    this.setState({
      chosenChoiceNumber: newNumber
    })
  }

  render(){
    // console.log(this.state.chosenChoiceNumber)
    return(
      <div>
        <select onChange={(e)=> this.handleChoiceChange(e.target.value)}>
          {
            this.state.characterChoiceNumbers.map(choice => <option key={choice}>{choice}</option>)
          }
        </select>
        <CharacterInfoPage chosenChoiceNumber={this.state.chosenChoiceNumber}/>
      </div>
    )
  }
}


export default App;
