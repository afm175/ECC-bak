import React from 'react'
import './home.css'
import { FcCalculator } from 'react-icons/fc'
import { NavLink } from 'react-router-dom'


function Home() {
    return (
        <div className='homebox'>
            <FcCalculator className="icon-ECC" />
            <h1>Easy Currency Calculator</h1>
            <div>
                <NavLink to="/currency" className="button btn">
                    Currency
                </NavLink>
                <NavLink to="/calculator" className="button btn">
                    Calculator
                </NavLink>
                <NavLink to="/base" className="button btn">
                    Base
                </NavLink>
                {/* <NavLink to="/info" className="button btn">
                    Info
                </NavLink> */}
            </div>
        </div>
    )
}

export default Home
