import React from 'react';
import { connect } from 'react-redux';
import '../assets/components/Header.scss';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar';

// Components
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
    const { user } = props;

    const hasUser = user ? Object.keys(user).length > 0 : null;

    const handleLogout = (event) => {
        props.logoutRequest({});
    };

    return (
        <header className='header'>
            <Link to='/'>
                <img className='header__img' src={logo} alt='' />
            </Link>
            <div className='header__menu'>
                <div className='header__menu--profile'>
                    { hasUser ?
                        (<img src={gravatar(user.email)} alt={user.email} />) :
                        (<img src={userIcon} alt='' />)}
                    <p>Perfil</p>
                </div>
                <ul>
                    {
                        hasUser ?
                            (
                                <>
                                    <li>
                                        <Link to='/account'>
                                            {user.name}
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            href='#logout'
                                            onClick={handleLogout}
                                        >
                                            Cerrar Sesión
                                        </a>
                                    </li>
                                </>
                            ) :
                            (
                                <li>
                                    <Link to='/login'>
                                        Iniciar sesión
                                    </Link>
                                </li>
                            )
                    }
                </ul>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = {
    logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
