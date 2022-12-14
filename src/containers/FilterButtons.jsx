import React from 'react'

export const FilterButtons = ({setColor, setType, setRarity}) => {
    const handleChangeColor = (event) => {
        event.preventDefault()
        setColor(event.target.value)
    }

    const handleChangeType = (event) => {
        event.preventDefault()
        setType(event.target.value)
    }

    const handleChangeRarity = (event) => {
        event.preventDefault()
        setRarity(event.target.value)
    }

  return (
    <div id='dropdowns-container'>
        <div className='dropdowns'>
            <label htmlFor="color">Color: </label>
            <select onChange={handleChangeColor} name="color" id="color">
                <option value="">Select color</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
            </select>
        </div>
        <div className='dropdowns'>
            <label htmlFor="type">Type: </label>
            <select onChange={handleChangeType} name="type" id="type">
                <option value="">Select type</option>
                <option value="Creature">Creature</option>
                <option value="Planeswalker">Planeswalker</option>
                <option value="Land">Land</option>
                <option value="Sorcery">Sorcery</option>
                <option value="Instant">Instant</option>
            </select>
        </div>
        <div className='dropdowns'>
            <label htmlFor="rarity">Rarity: </label>
            <select onChange={handleChangeRarity} name="rarity" id="rarity">
                <option value="">Select rarity</option>
                <option value="Common">Common</option>
                <option value="Uncommon">Uncommon</option>
                <option value="Rare">Rare</option>
                <option value="Mythic">Mythic</option>
            </select>
        </div>
    </div>
  )
}

// artist: "Pete Venters"
    // cmc: 7
    // colors: Array [ "White" ]
    // power: "4"
    // toughness: "4"
    // rarity: "Uncommon"
    // setName: "Tenth Edition"
    // subtypes: Array [ "Human", "Cleric" ]
    // types: Array [ "Creature" ]
