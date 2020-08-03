import React from 'react'

import './style.css'

import Card from '../Card'

export default function List({ cardsData, callback }) {
    return (
        <div className="list-container">
            <div className="list">
                {cardsData.map(cardData => (
                    <Card key={cardData.id} data={cardData} callback={callback}/>
                ))}
            </div>
        </div>
    )
}