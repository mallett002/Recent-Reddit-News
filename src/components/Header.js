import React from 'react';
import PropTypes from 'prop-types';
import NewsType from './NewsType';

const Header = ({ handleFetch }) => (
        <div>
            <NewsType child='US News' handleFetch={handleFetch} category='usNews' />
            <NewsType child='Sports' handleFetch={handleFetch} category='sports' />
            <NewsType child='Politics' handleFetch={handleFetch} category='politics' />
            <NewsType child='Uplifting' handleFetch={handleFetch} category='uplifting' />
        </div>
);

Header.propTypes = {
    handleFetch: PropTypes.func.isRequired
};

export default Header;