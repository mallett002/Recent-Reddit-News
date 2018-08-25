import React from 'react';
import PropTypes from 'prop-types';
import NewsCard from './NewsCard';

const NewsDisplay = ({ match, data }) => (
    <div> 
        <ul> {/*Only return 10 of them*/}
            {data.json.slice(0, 10).map((item, index) => ( 
                <NewsCard info={item} key={index} />
            ))}
        </ul>
    </div>
);

NewsDisplay.propTypes = {
    match: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
};

export default NewsDisplay;