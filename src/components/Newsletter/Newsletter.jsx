import React from 'react'
import './Newsletter.css'

export default function Newsletter() {
  return (
    <div className='newslatter'>
        <h1>Get Exclusive Offers On your E-mail</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
