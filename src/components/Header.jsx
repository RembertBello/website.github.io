import React from 'react';
import './Header.css';
import Logo from './images/LogoDaniel.jpeg';

const Header = () => {
    const listNav = [
        {
            li: 'Inicio',
            url: 'Inicio',
        },
        {
            li: 'Servicio',
            url: 'Inicio',

        },
        {
            li: 'Sobre Nosotros',
            url: 'Inicio',

        },
        {
            li: 'Programa',
            url: 'Inicio',

        },
        {
            li: 'FAQ',
            url: 'Inicio',

        },
    ]
    return (
        <div>
            <header id='header' className="header">
                <img className="img__logo" src={Logo} alt="logo de empresa" />
                <nav className="nav">
                    <ul className="ul nav__ul">
                        {
                            listNav.map(listNavItem =>
                                {
                                    return(
                                        <li className="li ul__li header__ul__li"> <a className="a--link" href={listNavItem.url}>{listNavItem.li}</a></li>
                                    )
                                }
                            )
                        }
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;