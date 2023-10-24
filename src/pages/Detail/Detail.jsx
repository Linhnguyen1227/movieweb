import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Detail.scss';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import CastsList from './CastsList';
import VideoList from './VideoList';

function Detail() {
    const { category, id } = useParams();
    const [item, setItem] = useState();

    useEffect(() => {
        const getDetail = async () => {
            const res = await tmdbApi.detail(category, id, { params: {} });
            setItem(res);
            window.scrollTo(0, 0);
        };
        getDetail();
    }, [category, id]);
    console.log(item);

    return (
        <>
            {item && (
                <>
                    <div
                        className="banner"
                        style={{
                            backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`,
                        }}
                    ></div>
                    <div className="mb-3 movie-content container">
                        <div className="movie-content_poster">
                            <div
                                className="movie-content_poster_img"
                                style={{
                                    backgroundImage: `url(${apiConfig.originalImage(
                                        item.poster_path || item.backdrop_path,
                                    )})`,
                                }}
                            ></div>
                        </div>
                        <div className="movie-content_info">
                            <div className="title">{item.title || item.name}</div>
                            <div className="genres">
                                {item.genres &&
                                    item.genres.slice(0, 5).map((genre, index) => (
                                        <span className="genre-item" key={index}>
                                            {genre.name}
                                        </span>
                                    ))}
                            </div>
                            <p className="overview">{item.overview}</p>
                            <div className="casts">
                                <div className="section_header">
                                    <h2>Cast</h2>
                                </div>
                                <CastsList id={item.id} />
                            </div>
                        </div>
                    </div>
                    <VideoList id={item.id} />
                </>
            )}
        </>
    );
}

export default Detail;
