import React, {useState} from 'react'
import './apiInfo.css'



function ApiInfo() {
    return (
        <div className='api box'>
            <h1>API Info</h1>
            <text>API by data.fixer.io</text>
            <text>Last Update: 25/11/2021</text>
            <text>Base Currency: EUR</text>
        </div>
    )
}

export default ApiInfo

