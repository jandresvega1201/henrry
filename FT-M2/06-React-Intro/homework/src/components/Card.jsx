import React from 'react';
import styles from "../Card.module.css";
export default function Card(props) {
  // acá va tu código
  return (
      <div className={styles.container}>
          <button onClick={props.onClose} className={styles.boton}>X</button>
          <h3> {props.name} </h3>
          <div>
              <p> Min </p>
              <p> {props.min} </p>
              <p> Max </p>
              <p> {props.max} </p>
          </div>
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}/>
      </div>
  )
};
