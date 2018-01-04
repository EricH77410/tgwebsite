import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-box">
                <img src="/assets/img/CS.png" alt="logo" className="header__logo"/>
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">CS Trophy Gestion</span>
                    <span className="heading-primary--sub">Gestion du cabinet dentaire</span>
                </h1>
                <a href="/" className="btn btn--white btn--animated">Découvrir</a>
            </div>            
        </header>
    )
}

export default Header;