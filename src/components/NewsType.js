import React from 'react';
import PropTypes from 'prop-types';
import { getEndpoint } from '../constants/constants';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const NewsType = ({ child, handleFetch, category, buttonColor }) => (
    <NavLink className='navlink'
        onClick={ () => handleFetch(getEndpoint(category))}
        to={`/${category}`}
    >
        <Button 
            style={{ backgroundColor: buttonColor, color: 'white' }} 
            variant="contained">
            {child}
        </Button>
       
    </NavLink>
);

NewsType.propTypes = {
    child: PropTypes.string.isRequired,
    handleFetch: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired
};

export default NewsType;