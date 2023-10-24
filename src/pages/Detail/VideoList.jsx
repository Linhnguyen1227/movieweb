import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';

function VideoList(props) {
    const { category } = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const Videos = async () => {
            const res = await tmdbApi.getVideos(category, props.id);
            setVideos(res.results.slice(0, 3));
        };
        Videos();
    }, [category, props.id]);
    return (
        <>
            {videos.map((item, i) => (
                <Video key={i} item={item} />
            ))}
        </>
    );
}
const Video = (props) => {
    const item = props.item;
    const iframeRef = useRef();
    useEffect(() => {
        const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video section mb-3">
            <div className="video_title">
                <h2>{item.name}</h2>
            </div>
            <iframe ref={iframeRef} width={'100%'} title="video" src={`https://www.youtube.com/embed/${item.key}`} />
        </div>
    );
};

export default VideoList;
