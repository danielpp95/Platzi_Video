import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import '../assets/styles/App.scss'

export default () => (
    <div className='App'>
        <Header/>
        <Search/>
        <Categories
            title='List 1'>
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>
        
        <Categories title='Tendencias'>
            <Carousel>
                <CarouselItem/>
            </Carousel>
        </Categories>

        <Categories title='Platzi Video Originals'>
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>
        <Footer/>
    </div>
)