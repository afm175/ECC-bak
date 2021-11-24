import React from 'react'
import './author.css'
import image from './foto.png'

function Author() {
    return (
        <div className='auth-box'>
            <h2>About Author</h2>
            <img className='image'
                src={image}
                // src="https://drive.google.com/uc?id=1zO-x6ax3JiWx_I8LRBg_NfzxMfWUcaBf&export=download"
                alt="author pic"
            />
            <p>Abdullah Azzam Farid M</p>
            <p>21120119130071</p>
            <p>Group 30</p>
        </div>
    )
}

export default Author
