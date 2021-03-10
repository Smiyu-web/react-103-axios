import React from 'react'

const Modal = (props) => {
  return (
    <div>
      <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>{props.cityName}</h4>
          <p>High: {props.high} - Low: {props.low}</p>
          <p>{props.weather} <img src={props.icon} alt="icon" /></p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    </div>
  )
}

export default Modal

