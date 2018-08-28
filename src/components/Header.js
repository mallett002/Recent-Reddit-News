import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsType from './NewsType';

const hrStyles = {
    worldNews: { background: '#DE7A22' },
    sports: { background: '#F4CC70' },
    politics: { background: '#6AB187' },
    uplifting: { background: '#20948B' },
};


class Header extends Component {
    state = {
        selected: 'worldnews'
    }

    handleSelected = (category) => {
        this.setState({ selected: category});
    }
    
    render() {
        const { handleFetch } = this.props;
        const { selected } = this.state;
        return (
            <div className='header'>
                <div className='nav'>
                    <NewsType child='World News' handleFetch={handleFetch} category='worldnews' buttonColor='#DE7A22' handleClick={this.handleSelected} selected={selected} />
                    <NewsType child='Sports' handleFetch={handleFetch} category='sports' buttonColor='#F4CC70' handleClick={this.handleSelected} selected={selected} />
                    <NewsType child='Politics' handleFetch={handleFetch} category='politics' buttonColor='#6AB187' handleClick={this.handleSelected} selected={selected} />
                    <NewsType child='Uplifting' handleFetch={handleFetch} category='uplifting' buttonColor='#20948B' handleClick={this.handleSelected} selected={selected} />
                </div>
                <hr className='header-hr'
                    style={Object.assign({}, 
                        selected === 'worldnews' && hrStyles.worldNews,
                        selected === 'sports' && hrStyles.sports,
                        selected === 'politics' && hrStyles.politics,
                        selected === 'uplifting' && hrStyles.uplifting
                    )} 
                />
            </div>
        )
    }
}

Header.propTypes = {
    handleFetch: PropTypes.func.isRequired
};

export default Header;