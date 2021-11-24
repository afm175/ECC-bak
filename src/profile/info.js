import React from 'react'
import './info.css'
import { FcCalculator } from 'react-icons/fc'
import { NavLink } from 'react-router-dom'

function Info() {
    return (
        <div className='profbox'>
            <div className='info content-wrap'>
                <FcCalculator className="icon-ECC" />
                {/* <h1>ECC</h1> */}
                <text>Easy Currency Calculator</text>
                <text>v0.1</text>
            </div>
            <div className='button'>
                <NavLink to="/API" className="button bt">
                    API Info
                </NavLink>
                <NavLink to="/author" className="button bt">
                    Author Info
                </NavLink>
            </div>
        </div>
    )
}

export default Info
