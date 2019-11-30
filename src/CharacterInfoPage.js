import React, { useState, useEffect } from 'react'

const CharacterInfoPage = (props) => {
    const [characterObject, setCharacterObject] = useState({})

    useEffect(() => {
        fetch(`https://swapi.co/api/people/${props.chosenChoiceNumber}`)
        .then(resp => resp.json())
        .then(data => {
            setCharacterObject(data)
        })
    }, [props.chosenChoiceNumber])

    return (
        <div>
            {
                Object.keys(characterObject).length !== 0 ? 
                <div>
                    <h1>{characterObject.name}</h1>
                </div>
                :
                <h1>Loading</h1>
            }
        </div>
    )  
}

export default CharacterInfoPage
