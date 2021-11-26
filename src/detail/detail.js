import React from 'react'
import './detail.css'
import { NavLink } from 'react-router-dom';
import { infos } from './datas';

export default function Detail() {
    

    return (
        <div className='detel'>
            <div className='basebox' >Based on EUR </div>
            {infos.map((info) => (
                <div key={info.id}>
                    <NavLink
                        to={`/detail/${info.id}`}
                    >
                        <button className='listbox'>{info.cur} = {info.rate}</button>
                    </NavLink>
                </div>
            ))}
            
        </div>
    )
}

