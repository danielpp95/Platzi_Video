import React, { useState, useEffect } from 'react';

// Components
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/Carouselitem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
    const [Videos, SetVideos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/initalState')
            .then((response) => response.json())
            .then((data) => SetVideos(data));
    }, []);

    console.log(Videos);

    return (
        <div className='App'>
            <Header />
            <Search />
            <Categories
                title='List 1'
            >
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Categories title='Tendencias'>
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Categories title='Platzi Video Originals'>
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>
            <Footer />
        </div>
    );
};

export default App;
