import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoreResults from './MoreResults';
import Masonry from 'react-masonry-css';
import NewsCard from './NewsCard';
import VideoCard from './VideoCard';
import { getVid } from '../constants/constants';

const breakpointColumns = {
    default: 4,
    1100: 3,
    900: 2,
    500: 1
};

class NewsDisplay extends Component {

    handleLoad = () => {
        this.props.loadMore();
    }

    render() {
        const { data } = this.props;
        const { itemCount } = this.props;
        return (
            <div>
                <Masonry
                    breakpointCols={breakpointColumns}
                    className='masonry'
                    columnClassName='masonry-grid-column'>
                    {data.json.slice(0, itemCount).map((item, index) => (
                        getVid(item)
                            ? <VideoCard src={getVid(item)} info={item} key={index} />
                            : <NewsCard info={item} key={index} />
                    ))}
                </Masonry>

                <div className='more-results'>
                    {itemCount < 25 &&
                        <MoreResults
                            subreddit={data.json[0].subreddit}
                            loadMore={this.handleLoad}
                        />}
                </div>
            </div >
        )
    }
}

NewsDisplay.propTypes = {
    data: PropTypes.object.isRequired,
    itemCount: PropTypes.number.isRequired
};

export default NewsDisplay;
