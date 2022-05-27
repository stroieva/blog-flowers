import React from 'react'
import 'common/Reset/Reset.css'
import 'common/Grid/Grid.css'
import { Social } from 'containers/Header/Social/Social.js'
import './Header.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { keys } from 'lodash'

const Header = ({
    isLiked,
    toggleMobileMenu,
    toggleSubmenu,
    hideSubmenu,
    mobileMenu,
    submenu,
}) => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-10 col-sm-3 col-md-2">
                            <div className="logo">
                                <Link to="/">Flowers</Link>
                            </div>
                        </div>

                        <div className="col-xs-2 col-sm-9 col-md-8 header-menu">
                            <nav
                                className={
                                    mobileMenu
                                        ? 'nav navigation active-menu'
                                        : 'nav navigation hidden-menu'
                                }
                            >
                                <ul className="menu">
                                    <li className="menu-item">
                                        <Link
                                            to="/"
                                            className="menu-link menu-link-active"
                                            onClick={() => toggleMobileMenu()}
                                        >
                                            Головна
                                        </Link>
                                    </li>
                                    <li className="menu-item categories-list-mobile">
                                        <Link
                                            to="#"
                                            onClick={() => toggleSubmenu()}
                                            className="menu-link"
                                        >
                                            Категорії
                                        </Link>
                                        <ul className="submenu">
                                            <li>
                                                <Link
                                                    to="/category/flowers"
                                                    onClick={() =>
                                                        toggleMobileMenu()
                                                    }
                                                    className="menu-link"
                                                >
                                                    Квіти
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/category/interesting"
                                                    onClick={() =>
                                                        toggleMobileMenu()
                                                    }
                                                    className="menu-link"
                                                >
                                                    Цікаве
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    to="/category/advices"
                                                    onClick={() =>
                                                        toggleMobileMenu()
                                                    }
                                                    className="menu-link submenu-link"
                                                >
                                                    Поради
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="menu-item categories-list-desktop">
                                        <Link
                                            to="#"
                                            onClick={() => toggleSubmenu()}
                                            className="menu-link"
                                        >
                                            Категорії
                                        </Link>
                                        <ul className="submenu">
                                            <li>
                                                <Link
                                                    to="/category/flowers"
                                                    onClick={() =>
                                                        toggleMobileMenu()
                                                    }
                                                    className="menu-link"
                                                >
                                                    Квіти
                                                </Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link
                                                    to="/category/interesting"
                                                    onClick={() =>
                                                        toggleMobileMenu()
                                                    }
                                                    className="menu-link"
                                                >
                                                    Цікаве
                                                </Link>
                                            </li>

                                            <li className="menu-item">
                                                <Link
                                                    to="/category/advices"
                                                    onClick={() =>
                                                        toggleMobileMenu()
                                                    }
                                                    className="menu-link submenu-link"
                                                >
                                                    Поради
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="menu-item">
                                        <Link
                                            to="/galery"
                                            onClick={() => toggleMobileMenu()}
                                            className="menu-link"
                                        >
                                            Галерея
                                        </Link>
                                    </li>
                                    <li className="menu-item page-favorite">
                                        <Link
                                            to="/favorites"
                                            onClick={() => toggleMobileMenu()}
                                            className="menu-link"
                                        >
                                            Favorites
                                            <span className="favorite-count">
                                                {
                                                    keys(isLiked).filter(
                                                        (articleId) =>
                                                            isLiked[
                                                                articleId
                                                            ] === true
                                                    ).length
                                                }
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div
                                className="nav-mobile-menu"
                                onClick={() => (
                                    toggleMobileMenu(), hideSubmenu()
                                )}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                        </div>
                        </div>
                        <Social />
                    </div>
                </div>
            </header>
        </>
    )
}

const mapState = (state) => ({
    isLiked: state.articleLikeState,
})

export default connect(mapState)(Header)
