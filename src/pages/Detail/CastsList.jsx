import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './Detail.scss';

const CastsList = (props) => {
    const { category } = useParams();
    const [casts, setCasts] = useState([]);
    useEffect(() => {
        const getCast = async () => {
            const res = await tmdbApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 5));
            console.log(res);
        };
        getCast();
    }, [category, props.id]);

    return (
        <div className="cast">
            {casts.map((cast, index) => (
                <div className="cast_item" key={index}>
                    <div
                        className="cast_item_img"
                        style={{ backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})` }}
                    ></div>
                    <p className="cast_item_name">{cast.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CastsList;
