import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsCard from './NewsCard';
import MoreResults from './MoreResults';
import VideoCard from './VideoCard';
import { getVid } from '../constants/constants';

class NewsDisplay extends Component {

    componentDidUpdate() {
        const { data } = this.props;
        console.log("media:", data.json[0].media); 
    }

    handleLoad = () => {
        this.props.loadMore();
    }

    render() {
        const { data } = this.props;
        const { itemCount } = this.props;
        return (
            <div>
                <ul className='masonry'>
                    {data.json.slice(0, itemCount).map((item, index) => (
                    getVid(item)
                    ? <VideoCard src={getVid(item)} info={item} key={index} />
                    : <NewsCard info={item} key={index} />
                    ))}
                </ul>
                <div className='more-results'>
                    {itemCount < 25 && 
                    <MoreResults
                        subreddit={data.json[0].subreddit}
                        loadMore={this.handleLoad}
                    />}
                </div>
            </div>
        )
    }
}

NewsDisplay.propTypes = {
    data: PropTypes.object.isRequired,
    itemCount: PropTypes.number.isRequired
};

export default NewsDisplay;
