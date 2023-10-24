import { Link } from 'react-router-dom';

import apiConfig from '../../api/apiConfig';
import { category } from '../../api/tmdbApi';
import Button from '../Button/Button';
import './MovieCard.scss';

function MovieCard(props) {
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

export default MovieCard;
