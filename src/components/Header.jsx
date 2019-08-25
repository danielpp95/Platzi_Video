import React from 'react'
import '../assets/components/Header.scss'

export default () => (
    <header className='header'>
        <img src="header__img" alt=""/>
        <div className='headr__menu'>
            <div className="herder__menu--profile">
                <img src="../assets/user-icon.png" alt=""/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
)