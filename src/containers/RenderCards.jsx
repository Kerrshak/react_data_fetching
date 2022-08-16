import React from 'react'

const RenderCards = ({card}) => {
  return (
    <li className='card-item'>
        <p className='card-text-name'>{card.name}</p>
        <img src={card.imageUrl} alt={card.name} />
        <p className='card-text-info'>Artist: {card.artist}</p>
        <p className='card-text-info'>Set: {card.setName}</p>
    </li>
  )
}

export default RenderCards