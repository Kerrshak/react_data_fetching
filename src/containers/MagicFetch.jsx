import React, { useState, useEffect} from 'react'
import {getMagic} from '../api'
import {ListCards} from './ListCards'
import {FilterButtons} from './FilterButtons'
import {LoadingImage} from './LoadingImage'

const MagicFetch = () => {
    const [cardArr, setCardArr] = useState([])
    const [color, setColor] = useState('')
    const [type, setType] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true)
        getMagic(color, type)
        .then(({cards}) => {
            setCardArr(cards)
            setIsLoading(false)
        })
    }, [color, type])

    if(isLoading)return (
        <div>
            <FilterButtons setColor={setColor} setType={setType}/>
            <LoadingImage />
        </div>
    )

    return (
        <div>
            <FilterButtons setColor={setColor} setType={setType}/>
            <ListCards cardArr={cardArr}/>
        </div>
    )
}

export default MagicFetch

// artist: "Pete Venters"
    // ​
    // cmc: 7
    // ​
    // colorIdentity: Array [ "W" ]
    // ​
    // colors: Array [ "White" ]
    // ​
    // foreignNames: Array(8) [ {…}, {…}, {…}, … ]
    // ​
    // id: "5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c"
    // ​
    // imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card"
    // ​
    // layout: "normal"
    // ​
    // legalities: Array(8) [ {…}, {…}, {…}, … ]
    // ​
    // manaCost: "{5}{W}{W}"
    // ​
    // multiverseid: "130550"
    // ​
    // name: "Ancestor's Chosen"
    // ​
    // number: "1"
    // ​
    // originalText: "First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen comes into play, you gain 1 life for each card in your graveyard."
    // ​
    // originalType: "Creature - Human Cleric"
    // ​
    // power: "4"
    // ​
    // printings: Array(3) [ "10E", "JUD", "UMA" ]
    // ​
    // rarity: "Uncommon"
    // ​
    // set: "10E"
    // ​
    // setName: "Tenth Edition"
    // ​
    // subtypes: Array [ "Human", "Cleric" ]
    // ​
    // text: "First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen enters the battlefield, you gain 1 life for each card in your graveyard."
    // ​
    // toughness: "4"
    // ​
    // type: "Creature — Human Cleric"
    // ​
    // types: Array [ "Creature" ]
    // ​
    // variations: Array [ "b7c19924-b4bf-56fc-aa73-f586e940bd42" ]