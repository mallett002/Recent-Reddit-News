import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../constants/constants';

// If there is an image available render a NewsCard with an image.
// Otherwise render an imageless NewsCard
const NewsCard = ({ info }) => (
    <div className='item'>
        <a href={info.url} target="_blank" rel="noopener noreferrer">
            {info.preview
                ? <div className='card'>
                    <div className='img-wrapper'>
                        <img src={`${info.preview.images[0].source.url}`} alt={info.domain} />
                    </div>
                    <div className='card-info'>
                        <h4>{info.title}</h4>
                        <div className='when-where'>
                            <p>{info.domain}</p>
                            <p>{getDate(info.created)}</p>
                        </div>
                    </div>
                </div>

                : <div className='photolessCard'>
                    <h4>{info.title}</h4>
                    <div className='when-where'>
                        <p>{info.domain}</p>
                        <p>{getDate(info.created)}</p>
                    </div>
                </div>}
        </a>
    </div>
);

NewsCard.propTypes = {
    info: PropTypes.object.isRequired
};

export default NewsCard;

