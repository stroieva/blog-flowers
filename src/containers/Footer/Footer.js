import React from 'react'
import 'common/Grid/Grid.css'
import './Footer.css'
import 'containers/Header/Header.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 ">
                            <div className="logo">
                                <Link to="/">Flowers</Link>
                            </div>
                            <p className="footer-content">
                                © 2022 copyright // All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
