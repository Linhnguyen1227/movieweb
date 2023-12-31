import React from 'react';
import { Link } from 'react-router-dom';

import HeroSlide from '../components/HeroSlide/HeroSlide';
import { OutlineButton } from '../components/Button/Button';
import MovieList from '../components/MovieList/MovieList';
import { category, movieType, tvType } from '../api/tmdbApi';
function Home() {
    return (
        <div>
            <HeroSlide />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header  mb-2">
                        <h2>Trending Movies</h2>
                        <Link to={'/movie'}>
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>
                <div className="section mb-3">
                    <div className="section__header  mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to={'/movie'}>
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated} />
                </div>
                <div className="section mb-3">
                    <div className="section__header  mb-2">
                        <h2>Trending TV</h2>
                        <Link to={'/tv'}>
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated} />
                </div>
                <div className="section mb-3">
                    <div className="section__header  mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to={'/tv'}>
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.on_the_air} />
                </div>
            </div>
        </div>
    );
}

export default Home;
