import React from 'react'
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router'
import { datas } from './datas'
import './detailPage.css'

function DetailPage() {
    const params = useParams()
    let id = params.detailId
    return (
        <div className='detailpage'>
            <img className='uang' src={datas[id].img} alt='Currency Image'></img>
            <div className='box'>
                <div className='desc'>
                    <h1>{datas[id].cur}</h1>
                    <p>{datas[id].desc}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailPage
