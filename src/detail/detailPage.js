import React from 'react'
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router'
import { infos } from './datas'
import './detailPage.css'

function DetailPage() {
    const params = useParams()
    let id = params.detailId
    return (
        <div className='detailpage'>
            <img className='uang' src={infos[id].img} alt='Currency Image'></img>
            <div className='box'>
                <div className='desc'>
                    <h1>{infos[id].cur}</h1>
                    <p>{infos[id].desc}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailPage
