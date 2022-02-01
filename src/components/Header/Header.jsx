import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
    
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
           : <NavLink to={ '/login'}>login</NavLink>  }
        </div>
    
    </header>
}

export default Header;