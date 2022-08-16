import React from 'react'

const RenderCards = ({card}) => {
  return (
    <li>
        <p>{card.name}</p>
        <img src={card.imageUrl} alt={card.name} />
        <p>Artist: {card.artist}</p>
        <p>Set: {card.setName}</p>
        </li>
  )
}

export default RenderCards