import React from 'react';
import PropTypes from 'prop-types';
import NewsType from './NewsType';

const Header = ({ handleFetch }) => (
        <div className='nav'>
            <NewsType child='US News' handleFetch={handleFetch} category='usNews' buttonColor='#2196f3' />
            <NewsType child='Sports' handleFetch={handleFetch} category='sports' buttonColor='#e29f30' />
            <NewsType child='Politics' handleFetch={handleFetch} category='politics' buttonColor='#70ab70' />
            <NewsType child='Uplifting' handleFetch={handleFetch} category='uplifting' buttonColor='#ad5454' />
        </div>
);

Header.propTypes = {
    handleFetch: PropTypes.func.isRequired
};

export default Header;