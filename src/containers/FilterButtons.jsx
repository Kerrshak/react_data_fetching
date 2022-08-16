import React from 'react'

export const FilterButtons = ({setColor}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const event = document.getElementById("color")
        setColor([event.value])
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Select a color: </label>
            <select name="color" id="color">
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
            </select>
            <input type="submit" value="Submit"/>
        </form>
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
