import React from 'react';
import Convencer from './images/data.jpg';
import './Section.css';

const Section = () => {

    const listChoose = [
        {
            image: require('./images/editar.png'),
            subtitle3: 'Empresa profesional y certificada',
            description: 'Para ti este internet es valioso porque   (esta es la razón por la que nos escoges)...Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore!'
        },
        {
            image: require('./images/editar.png'),
            subtitle3: 'Concepto de negocio y producto también',
            description: 'Para ti este internet es valioso porque   (esta es la razón por la que nos escoges)...Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore!'
        },
        {
            image: require('./images/editar.png'),
            subtitle3: 'Buena relación a nivel departamental',
            description: 'Para ti este internet es valioso porque   (esta es la razón por la que nos escoges)...Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore!'
        }
    ];

    const listOffer = [
        {
            image: require('./images/editar.png'),
            altImage: 'Imagen de lo que se ofrece',
            description: 'Descripción de lo que se ofrece'
        },
        {
            image: require('./images/editar.png'),
            altImage: 'Imagen de lo que se ofrece',
            description: 'Descripción de lo que se ofrece'
        },
        {
            image: require('./images/editar.png'),
            altImage: 'Imagen de lo que se ofrece',
            description: 'Descripción de lo que se ofrece'
        },
        {
            image: require('./images/editar.png'),
            altImage: 'Imagen de lo que se ofrece',
            description: 'Descripción de lo que se ofrece'
        },
    ];

    const listComment = [
        {
            image: require('./images/editar.png'),
            altImage: 'Imagen de lo que se ofrece',
            nameUser: 'Fulanito de Tal',
            description: 'Somos la institución educativa San Pedro Claver y podemos asegurar que la velocidad de este internet supera a los demás'
        },
        {
            image: require('./images/editar.png'),
            altImage: 'Imagen de lo que se ofrece',
            nameUser: 'Padre Linero',
            description: 'Estamos felices con la velocidad del tal'
        },
        {
            image: require('./images/editar.png'),
            altImage: 'Imagen de lo que se ofrece',
            nameUser: 'Lame Zuela de Tal',
            description: 'Estoy totalmente satisfecho con ...'
        },
        {
            image: require('./images/editar.png'),
            altImage: 'Imagen de lo que se ofrece',
            nameUser: 'Pepito Perez',
            description: 'Es una empres que se caracteriza por esto, esto y esto, y han estado satisfechos con nuestros servicios'
        },

    ];
    return (
        <div>
            <section className="section section--choose">
                {
                    listChoose.map(listChooseItem => {
                        return (
                            <div className=" div div__section--choose">
                                <div className="div">
                                    <img className="img img--choose" src={listChooseItem.image} alt="#" />
                                </div>

                                <h3 className="sub-title3">{listChooseItem.subtitle3}</h3>
                                <p className="description description__section">{listChooseItem.description}</p>
                            </div>
                        )
                    })
                }
            </section>

            <section className="section section--offer">
                {
                    listOffer.map(listOfferItem => {
                        return (
                            <div className=" div div__section--offer">
                                <div className="div div__img--offer">
                                    <img className="img img--offer" src={listOfferItem.image} alt={listOfferItem.altImage} />
                                </div>

                                <p className="description description--offer">{listOfferItem.description}</p>
                            </div>
                        )
                    })
                }
            </section>

            <section className="section section--convencer">
                <div className="div div__section--convencer">
                    <div className="div div__section--convener--img">
                        <img className="img img--convener" src={Convencer} alt="Esta esta imagen es para convencer al usuario" />
                    </div>

                    <div className="div div__section--convencer--text">
                        <h2>Tu búsqueda de internet terminó con nosotros</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Dolores suscipit deleniti sit eos sint nemo est repellat,

                            <br />
                            <br />

                            consequuntur officia illo blanditiis quos totam doloribus ipsam? Non officiis repellendus eum officia.
                        </p>

                        <div className="div div__section__button--convencer">
                            <a href="#" className="button section__button--convencer">SOLICITAR SERVICIO</a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section section--comment">
                <div className="div div__section__subtitle--comment">
                    <h3>
                        Testimonios de nuestros usuarios
                    </h3>
                </div>
                <div className="div section__div--references">
                    {
                        listComment.map(listCommentItem => {
                            return (
                                <div className=" div div__section--comment">
                                    <img className="img img--comment" src={listCommentItem.image} alt={listCommentItem.altImage} />
                                    <h4>{listCommentItem.nameUser}</h4>
                                    <p className="description description--comment">{listCommentItem.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    );
};

export default Section;