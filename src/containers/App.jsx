import React from 'react';
import '../assets/styles/App.scss';

// Components
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/Carouselitem';
import Footer from '../components/Footer';

// Hooks
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
    const initialState = useInitialState(API);
    return (
        <div className='App'>
            <Header />
            <Search />
            {
                Object.keys(initialState).length > 0 &&
                Object.values(initialState).map((list, index) => {
                    return list.length < 1 ? null : (
                        <Categories
                            key={Object.keys(initialState)[index]}
                            title={Object.keys(initialState)[index]}
                        >
                            <Carousel>
                                {
                                    list.map((item) => {
                                        return (
                                            <CarouselItem
                                                key={item.id}
                                                title={item.title}
                                                cover={item.cover}
                                                year={item.year}
                                                contentRating={item.contentRating}
                                                duration={item.duration}
                                            />
                                        );
                                    })
                                }
                            </Carousel>
                        </Categories>
                    );
                })
            }
            <Footer />
        </div>
    );
};

export default App;
