import React from 'react';
import PropTypes from 'prop-types';
import { getEndpoint } from '../constants/constants';
import { NavLink } from 'react-router-dom';

const width = window.innerWidth;

// NewsType renders a button wrapped in a NavLink from React Router.
// When clicked, it will call fetchNews through props, which will dispatch the action to fetch the data.
// The selected button will be a little larger than the rest, and will cause the <hr /> to render the 
// corresponding color.
const NewsType = ({ child, handleFetch, category, buttonColor, handleClick, selected }) => (
    <NavLink className='navlink'
        onClick={ () => handleFetch(getEndpoint(category))}
        to={`/${category}`}
    >
        <button className='btn'
            onClick={() => handleClick(category)}
            style={Object.assign({}, 
                { backgroundColor: buttonColor, color: 'white' },
                selected === category && width < 500 && { padding: '9px 12px 17px 12px' },
                selected === category && width >= 500 && { padding: '12px 14px 21px 14px'}
            )} 
            >
                {child.toUpperCase()}
        </button>
       
    </NavLink>
);

NewsType.propTypes = {
    child: PropTypes.string.isRequired,
    handleFetch: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired,
    buttonColor: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired
};

export default NewsType;