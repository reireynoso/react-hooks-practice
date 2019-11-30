import React, { Component } from 'react'

export default class CharacterInfoPage extends Component {
    state = {
        // chosenNumber: this.props.chosenChoiceNumber,
        characterObject: {}
    }

    componentDidMount(){
        fetch(`https://swapi.co/api/people/${this.props.chosenChoiceNumber}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                characterObject: data
            })
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps.chosenChoiceNumber !== this.props.chosenChoiceNumber){
            fetch(`https://swapi.co/api/people/${this.props.chosenChoiceNumber}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    characterObject: data
                })
            })
        }
    }
    render() {
        return (
            <div>
                {
                    Object.keys(this.state.characterObject).length !== 0 ? 
                    <div>
                        <h1>{this.state.characterObject.name}</h1>
                    </div>
                    :
                    <h1>Loading</h1>
                }
            </div>
        )
    }
}
