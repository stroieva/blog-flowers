import React from 'react'

export const HomeNavigationButton = ({ changeSlice }) => {
    return (
        <>
            <div className="nav-button">
                <button onClick={() => changeSlice(0, 6)}>1</button>
                <button onClick={() => changeSlice(6, 12)}>2</button>
                {/* <button onClick={() => changeSlice(10, 12)}>3</button> */}
            </div>
        </>
    )
}
