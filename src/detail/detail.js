import React, { useState, useEffect } from 'react'
import './detail.css'
import { NavLink, useHistory} from 'react-router-dom';
import { datas } from './datas';

export default function Detail(props) {
    
    const {history} = props
    const hist = useHistory()

    return (
        <div className='detel'>
            <div className='basebox' >Base = EUR </div>
            {datas.map((data) => (
                <div key={data.id}>
                    <NavLink
                        to={`/detail/${data.id}`}
                        onClick={() => hist.push(`/detail/${data.id}`)}
                    >
                        <button className='listbox'>{data.cur} = {data.rate}</button>
                    </NavLink>
                </div>
            ))}

        </div>
    )
}

