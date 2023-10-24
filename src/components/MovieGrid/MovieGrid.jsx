import React, { useCallback, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import './MovieGrid.scss';
import tmdbApi, { category, tvType, movieType as mt } from '../../api/tmdbApi';
import MovieCard from '../MovieCard/MovieCard';
import Button, { OutlineButton } from '../Button/Button';
import Input from '../Input/Input';

function MovieGrid(props) {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalpage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            // eslint-disable-next-line eqeqeq
            let response = null;
            if (keyword === undefined) {
                const params = {};
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMovieList(mt.upcoming, { params });

                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, { params });
                }
            } else {
                const params = {
                    query: keyword,
                };
                response = await tmdbApi.search(props.category, { params });
                console.log(params.query);
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        };
        // console.log(items);
        getList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.category, keyword]);
    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1,
            };
            switch (props.category) {
                case category.movie:
                    response = await tmdbApi.getMovieList(mt.upcoming, { params });

                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, { params });
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword,
            };
            response = await tmdbApi.search(props.category, { params });
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    };

    return (
        <>
            <div className="section mb-3">
                <MovieSearch type="text" placeholder="Enter" category={props.category} />
            </div>
            <div className="movie-grid">
                {items.map((item, i) => (
                    <MovieCard key={i} category={props.category} item={item} />
                ))}
            </div>
            <div className="movie-grid_loadmore">
                {page < totalpage && (
                    <OutlineButton className="small" onClick={loadMore}>
                        Load More
                    </OutlineButton>
                )}
            </div>
        </>
    );
}
const MovieSearch = (props) => {
    const history = useNavigate();
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const gotoSearch = () => {
        if (keyword.trim().length > 0) {
            history(`/${category[props.category]}/search/${keyword}`);
        }
    };
    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                console.log(123);
                gotoSearch();
            }
        };
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, gotoSearch]);

    return (
        <div className="movie-search">
            <Input
                placeholder={props.placeholder}
                type={props.type}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button onClick={gotoSearch} className="small">
                Enter
            </Button>
        </div>
    );
};
export default MovieGrid;
