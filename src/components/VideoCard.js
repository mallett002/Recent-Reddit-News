import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../constants/constants';

const VideoCard = ({ info, src }) => (
    <div className='item'>
        <a href={info.url} target="_blank" rel="noopener noreferrer">
            <div className='card'>
                <div className='video-wrapper'>
                    <video width='100%' height='auto' controls poster={info.preview.images[0].source.url}>
                        <source src={src} type="video/mp4" />
                        <source src={src} type="video/webm" />
                    </video>
                </div>
                <div className='card-info'>
                    <h4>{info.title}</h4>
                    <div className='when-where'>
                        <p>{info.domain}</p>
                        <p>{getDate(info.created)}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
);

VideoCard.propTypes = {
    info: PropTypes.object.isRequired,
    src: PropTypes.string.isRequired
}

export default VideoCard;