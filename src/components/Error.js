import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => (
    <div className='error'>
        <h3>Aaaah! Something went wrong...</h3>
        <p>The requested data returned with the error "{error.error.message}".</p>
        <p>Try again in a few minutes.</p>
        
    </div>
);

Error.propTypes = {
    error: PropTypes.object.isRequired
};

export default Error;

