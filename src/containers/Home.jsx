import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';

// Components
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/Carouselitem';

// Hooks
// import useInitialState from '../hooks/useInitialState';

// const API = 'http://localhost:3000/initalState';

const App = ({ myList, trends, originals }) => {
    // const initialState = useInitialState(API);
    const categories = [myList, trends, originals];
    const categoriesTitles = ['Favorites', 'Trends', 'Originals'];
    return (
        <>
            <Search />
            {
                Object.keys(trends).length > 0 &&
                categories.map((list, index) => {
                    return list.length < 1 ? null : (
                        <Categories
                            key={Object.keys(list)[index]}
                            title={categoriesTitles[index]}
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
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
};

export default connect(mapStateToProps, null)(App);
