import React from 'react'
import { useParams } from 'react-router'
import { datas } from './datas'

function DetailPage() {
    const { detailId } = useParams()
    return (
        <div>
            {datas[{ detailId }].cur}
        </div>
    )
}

export default DetailPage
