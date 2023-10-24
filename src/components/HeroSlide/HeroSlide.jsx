import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import Button, { OutlineButton } from '../Button/Button';
import Modal, { ModalContent } from '../Modal/Modal';
import './HeroSlide.scss';

function HeroSlide(props) {
    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };
            try {
                const res = await tmdbApi.getMovieList(movieType.popular, { params });
                setMovieItems(res.results.slice(0, 4));
                // console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        // console.log(movieItems);

        getMovies();
    }, []);

    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                // autoplay={{ delay: 3000 }}
            >
                {movieItems.map((item, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive }) => <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />}
                    </SwiperSlide>
                ))}
            </Swiper>
            {movieItems.map((item, i) => (
                <TrailerModal key={i} item={item} />
            ))}
        </div>
    );
}

const HeroSlideItem = (props) => {
    const history = useNavigate();
    const item = props.item;
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);
    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);
        const videos = await tmdbApi.getVideos(category.movie, item.id);
        if (videos.results.length > 0) {
            const videoSrc = `https://youtube.com/embed/${videos.results[0].key}`;
            // const videoSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.modal_content > iframe').setAttribute('src', videoSrc);
        } else {
            modal.querySelector('.modal_content').innerHTML = 'No Trailer';
        }
        modal.classList.toggle('active');
    };
    return (
        <div className={`hero-slide-item ${props.className}`} style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-slide-item_content container">
                <div className="hero-slide-item_content_info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button
                            onClick={() => {
                                history('/movie/' + item.id);
                            }}
                        >
                            Watch Now
                        </Button>
                        <OutlineButton onClick={setModalActive}>Watch Trailer</OutlineButton>
                    </div>
                </div>
                <div className="hero-slide-item_poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="#" />
                </div>
            </div>
        </div>
    );
};
const TrailerModal = (props) => {
    const item = props.item;
    const iframeRef = useRef(null);
    const onClose = () => iframeRef.current.setAttribute('src', '');
    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} title="trailer" style={{ width: '100%', height: '500px' }}></iframe>
            </ModalContent>
        </Modal>
    );
};
export default HeroSlide;
