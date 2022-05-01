/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import s from "../../stylesheets/History.module.css"


export default function History(props){
  return (
    <div className={s.container}>
      <img 
      className={s.image}
      src={require(`../../images/${props.image}.jpg`)}
      alt="image not found"
      />
      <div className={s.textContainer}>
        <p className={s.band}><strong>{props.band}</strong></p>
        <p className={s.country}>{props.country}</p>
        <p className={s.history}>{props.history}</p>
      </div>      
    </div>
  );
}

