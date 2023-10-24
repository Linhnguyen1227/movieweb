import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../Button/Button.scss';
import apiConfig from '../../api/apiConfig';
import { category } from '../../api/tmdbApi';

function Button(props) {
    return (
        <button
            className={`btn ${props.className}`}
            onClick={
                props.onClick
                    ? () => {
                          props.onClick();
                      }
                    : null
            }
        >
            {props.children}
        </button>
    );
}
export const OutlineButton = (props) => {
    return (
        <Button
            className={`btn-outline ${props.className}`}
            onClick={
                props.onClick
                    ? () => {
                          props.onClick();
                      }
                    : null
            }
        >
            {props.children}
        </Button>
    );
};
Button.propTypes = {
    onClick: PropTypes.func,
};

export default Button;
export function MovieCard(props) {
    // console.log(props);
    const item = props.item;
    const link = '/' + category[props.category] + '/' + item.id;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
    // console.log(link);
    return (
        <Link to={link}>
            <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h4>{item.name || item.title}</h4>
        </Link>
    );
}
