import React from 'react'
import '../assets/components/CarouselItem.scss'

import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'

export default ({title, subtitle}) => (
    <div className="carousel-item">
        <img 
            className="carousel-item__img" 
            src="https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt=""
        />
        <div className="carousel-item__details">
            <div>             
                <img 
                    className="carousel-item__details--img" 
                    src={playIcon}
                    alt="Play Icon"/>
                <img 
                    className="carousel-item__details--img"
                    src={plusIcon}
                    alt="Plus Icon"/>
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">{subtitle}</p>
        </div>
    </div>
)