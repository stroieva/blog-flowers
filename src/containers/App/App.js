import React, { Component } from 'react'
import Header from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'

class App extends Component {
    state = {
        sliceFrom: 0,
        sliceTo: 6,
    }

    changeSlice = (from, to) => {
        this.setState({
            sliceFrom: from,
            sliceTo: to,
            mobileMenu: false,
            submenu: false
        })
    }

    toggleMobileMenu = () => {
        this.setState((prevState) => {
            return {
                mobileMenu: !prevState.mobileMenu
            }
        })
    }

    toggleSubmenu = () => {
        this.setState((prevState) => {
            return {
                submenu: !prevState.submenu
            }
        })
    }
    hideSubmenu = () => {
        this.setState((prevState) => {
            return {
                submenu:false
            }
        })
    }

    render() {
        return (
            <>
                <Header 
                    toggleMobileMenu={this.toggleMobileMenu}
                    toggleSubmenu={this.toggleSubmenu}
                    hideSubmenu={this.hideSubmenu}
                    mobileMenu={this.state.mobileMenu}
                    submenu={this.state.submenu}/>
                <Main
                    changeSlice={this.changeSlice}
                    sliceFrom={this.state.sliceFrom}
                    sliceTo={this.state.sliceTo}
                />
                <Footer />
            </>
        )
    }
}

export default App
