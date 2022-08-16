import React from 'react'
import RenderCards from './RenderCards'

export const ListCards = ({cardArr}) => {
    console.log(cardArr)
  return (
    <div>
        <ul>
            {cardArr.map((card) => {
                if(card.imageUrl){
                    return <RenderCards key={card.id} card={card}/>
            }})}
        </ul>
    </div>
  )
}

