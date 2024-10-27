import React from 'react'
import home from '../assets/home.png'
import './Head.css'
import { Link } from 'react-router-dom'
import Products from '../Products'

const Head = () => {
    return (
        <div className='main-head'>
        <div className="head-content">
            <h1>Welcome to our Store!</h1>
            <p>Discover the latest products, offers, and promotions</p>
            <button>
                    <Link to="/products">Shop Now</Link>
                </button>
        </div>
        <div className="head-img">
            <img src={home} alt="Home Page"/>
        </div>
        
        </div>
    )
}

export default Head

