import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsType from './NewsType';

const hrStyles = {
    worldNews: { background: '#2196f3' },
    sports: { background: '#e29f30' },
    politics: { background: '#70ab70' },
    uplifting: { background: '#ad5454' },
};

class Header extends Component {
    state = {
        selected: null
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
                    <NewsType child='World News' handleFetch={handleFetch} category='worldnews' buttonColor='#2196f3' handleClick={this.handleSelected} selected={selected} />
                    <NewsType child='Sports' handleFetch={handleFetch} category='sports' buttonColor='#e29f30' handleClick={this.handleSelected} selected={selected} />
                    <NewsType child='Politics' handleFetch={handleFetch} category='politics' buttonColor='#70ab70' handleClick={this.handleSelected} selected={selected} />
                    <NewsType child='Uplifting' handleFetch={handleFetch} category='uplifting' buttonColor='#ad5454' handleClick={this.handleSelected} selected={selected} />
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