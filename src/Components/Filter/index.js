import React from 'react'

import './style.css'


export default function Filter({ name, callback, callbackAll }) {

    return (
        <div className={"filter" + ((name.length === 0) ? " hide-display" : "")}>
            <div>
                {name.map(element => (
                    <label key={element} className="button">
                        <p>{element}</p>
                        <span onClick={() => callback(element)}>
                            <img src='./images/icon-remove.svg' alt=""/>
                        </span>
                    </label>
                ))}
        
            </div>

            <label onClick={() => callbackAll()}>Clear</label>
        </div>
    )
}