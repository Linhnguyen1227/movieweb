import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader/PageHeader';

import { category as cate } from '../api/tmdbApi';
import MovieGrid from '../components/MovieGrid/MovieGrid';

function Catalog() {
    const { category } = useParams();
    console.log(category);
    return (
        <>
            <PageHeader>{category === cate.movie ? 'Movies' : 'Tv Series'}</PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category} />
                </div>
            </div>
        </>
    );
}

export default Catalog;
