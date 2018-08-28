import React from 'react';
import PropTypes from 'prop-types';
import { getEndpoint } from '../constants/constants';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// NewsType renders a button wrapped in a NavLink from React Router.
// When clicked, it will call fetchNews through props, which will dispatch the action to fetch the data.
// The selected button will be a little larger than the rest, and will cause the <hr /> to render the 
// corresponding color.
const NewsType = ({ child, handleFetch, category, buttonColor, handleClick, selected }) => (
    <NavLink className='navlink'
        onClick={ () => handleFetch(getEndpoint(category))}
        to={`/${category}`}
    >
        <Button id='btn'
            onClick={() => handleClick(category)}
            style={Object.assign({}, 
                { backgroundColor: buttonColor, color: 'white' },
                selected === category && { padding: '9px 14px 17px 12px' }
            )} 
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