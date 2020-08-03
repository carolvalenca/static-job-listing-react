import React from 'react'

import './style.css'

export default function Card({ data, callback }) {
    const buttons = [...data.languages, ...data.tools]

    return (
        <div className={"card" + (data.featured ? " border" : "")}>
            <div>
                <img src={data.logo} alt=""/>
                <div className="desc">
                    <div className="group">
                        <h4>{data.company}</h4>
                        {data.new && <label className="new">NEW!</label>}
                        {data.featured && <label className="featured">FEATURED</label>}
                    </div>
                    <h5>{data.position}</h5>
                    <div className="group">
                        <p>{data.postedAt}</p>
                        <p>{data.contract}</p>
                        <p>{data.location}</p>
                    </div>
                </div>
            </div>
            <div>
                {buttons.map(button => (
                    <button key={button} onClick={() => callback(button)}>{button}</button>
                ))}
            </div>
        </div>
    )
}