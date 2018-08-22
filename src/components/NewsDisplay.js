import React from 'react';
import PropTypes from 'prop-types';
// TODO import NewsCard from './NewsCard';

const NewsDisplay = ({ match }) => (
    <div>   
        <h1>{match.params.type.toUpperCase()}</h1>
        <hr style={{
            margin: '0, auto', 
            width: '70%'
        }} />
        {/*TODO
        <ul>
            // map over data
            props.data.json.map(item => { // each item is an obj with info
                <NewsCard info={item} />
            })
        </ul>*/}
    </div>
);

NewsDisplay.propTypes = {
    match: PropTypes.object.isRequired
};

export default NewsDisplay;