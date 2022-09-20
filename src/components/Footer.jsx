import React from 'react';
import ButtonWtpp from './ButtonWtpp';
import './Footer.css';

const Footer = () => {
    const listInfo = [
        {
            nameClass: 'foot__ul',
            titleList: 'Contacto',
            valuesList: [
                { value1: 'Uno' },
                { value1: 'dos' },
                { value1: 'tres' },
                { value1: 'cuatro' },
                { value1: 'Cinco' },
                { value1: 'Seis' },
            ]
        },
        {
            nameClass: 'foot__ul',
            titleList: 'Información',
            valuesList: [
                { value1: 'one' },
                { value1: 'Two' },
                { value1: 'Three' },
                { value1: 'Four' },
                { value1: 'Five' },
                { value1: 'Six' },
            ]
        },
        {
            nameClass: 'foot__ul',
            titleList: 'Información',
            valuesList: [
                { value1: 'one' },
                { value1: 'Two' },
                { value1: 'Three' },
                { value1: 'Four' },
                { value1: 'Five' },
                { value1: 'Six' },
            ]
        },
    ];



    return (
        <div>
            <footer className='footer'>

                <div className="div footer__div--list">
                    {
                        listInfo.map(listInfoItem => {
                            return (
                                    <ul className={listInfoItem.nameClass + 'ul'}>
                                        <li className="li ul__li"><h4>{listInfoItem.titleList}</h4></li>

                                        {listInfoItem.valuesList.map((itemValue) => {
                                                return (
                                                        <li className="li ul__li">{itemValue.value1}</li>
                                                    );
                                                }
                                            )
                                        }
                                    </ul>
                                );
                            }
                        )
                    }
                </div>
                <ButtonWtpp />
                <div className="div footer__div--description">
                    <p className='description footer__paragraph'>Copyright &copy; 2022 todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;