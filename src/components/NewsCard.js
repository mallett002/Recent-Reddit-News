import React from 'react';
import PropTypes from 'prop-types';

const backgroundStyles = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const NewsCard = ({ info }) => (
    <a href={info.url} target="_blank" rel="noopener noreferrer">
    <li>
        {info.preview !== undefined 
            ? <div className='card' style={{background: `url(${info.preview.images[0].source.url})`, ...backgroundStyles}}>
                <div className='card-info'>
                    <h3>{info.title}</h3>
                        <div className='when-where'>
                            <p>{info.domain}</p>
                            {/*TODO -get actual date*/}
                            <p>Sept 20th</p>
                        </div>
                </div>

              </div>
            : <div className='photolessCard'>
                <p>{info.domain}</p>
                <p>{info.title}</p>
              </div>}
    </li>
    </a>
);

NewsCard.propTypes = {
    info: PropTypes.object.isRequired
};

export default NewsCard;

// <img src={info.preview.images[0].source.url} alt='img' />