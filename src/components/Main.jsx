import React from 'react';
import Carrusel from './Carrusel';
import './Main.css';
/* =====================Carrusel===================== */


const Main = () => {

    return (
        <div>
            <main className="main">
                <div className="div div__main">
                    <h1 className="title">¿Quieres el mejor internet para tu hogar?</h1>

                    <p className="description description__main">En <strong>MegaNet Telecomunicaciones</strong> tenemos los mejores planes y beneficios para tu hogar. <br />
                        Nuestros planes te encantarán. <br />
                        ¿Cuál es la propuesta de valor que te estoy ofreciendo? </p>

                    <div className="div div__button">
                        <a href="#" className="button">SOLICITAR SERVICIO</a>
                    </div>
                </div>

                <div className="div div__main2">
                    <Carrusel />
                </div>
            </main>
        </div>
    );
};

export default Main;