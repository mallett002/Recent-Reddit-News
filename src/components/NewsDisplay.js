import React from 'react';
import PropTypes from 'prop-types';
import NewsCard from './NewsCard';

const NewsDisplay = ({ match, data }) => (
        <ul className='masonry'>
            {data.json.slice(0, 12).map((item, index) => ( 
                <NewsCard info={item} key={index} />
            ))}
        </ul>
);

NewsDisplay.propTypes = {
    match: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
};

export default NewsDisplay;


// choose better colors.
// expand bar under buttons that make background color
// make "More News option"
// #363237
// #2D4262
// #73605B
// #D09683