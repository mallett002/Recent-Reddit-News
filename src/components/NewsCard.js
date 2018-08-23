import React from 'react';
import PropTypes from 'prop-types';

const NewsCard = ({ info }) => (
    <a href={info.url} target="_blank" rel="noopener noreferrer">
    <li>
    <div style={{background: '#eeeeee'}}>
        {info.preview !== undefined 
            ? <img src={info.preview.images[0].source.url} alt='img' />
            :<div>
                <p>{info.domain}</p>
                <p>{info.title}</p>
            </div>}
    </div>
    </li>
    </a>
);

NewsCard.propTypes = {
    info: PropTypes.object.isRequired
};

export default NewsCard;