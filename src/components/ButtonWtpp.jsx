import React from 'react';
import './ButtonWtpp.css';
import './images/fontello-a540fdbf/css/fontello.css';
const ButtonWtpp = () => {
    return (
        <div>
            <a className="btn-wsp" href="https://api.whatsapp.com/send?phone=+573205410381&text=Hola,%20mi%20nombre%20es:%20______%20y%20estoy%20interesad@%20en%20el%20servicio." target="_blank">
                <i className="icon-whatsapp"></i>
            </a>
            <a className="btn-up" href="header">&#8593;</a>
        </div>
    );
};

export default ButtonWtpp;