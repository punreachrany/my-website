import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline__item">
        <i className={props.icon}></i>
        <h3 className="time__title">{props.title}</h3>
        <div className="timeline__header">
          <span className="timeline__institution">{props.institution}</span>
          <span className="timeline__date">{props.year}</span>
        </div>
        <p className="timeline__text">{props.desc}</p>
    </div>
  )
}

export default Card