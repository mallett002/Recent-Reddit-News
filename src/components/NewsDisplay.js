import React from 'react';
import PropTypes from 'prop-types';

const NewsDisplay = ({ match }) => (
    <div>   
        {match.params.type.toUpperCase()}
    </div>
);

NewsDisplay.propTypes = {
    match: PropTypes.object.isRequired
};

export default NewsDisplay;