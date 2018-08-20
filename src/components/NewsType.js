import React from 'react';
import PropTypes from 'prop-types';
import { getEndpoint } from '../constants/constants';

const NewsType = ({ child, handleFetch, category }) => (
    <button onClick={ () => handleFetch(getEndpoint(category))}>
        {child}
    </button>
);

NewsType.propTypes = {
    child: PropTypes.string.isRequired,
    handleFetch: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired
};

export default NewsType;