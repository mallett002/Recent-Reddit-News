import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoreResults from './MoreResults';
import Error from './Error';
import Masonry from 'react-masonry-css';
import NewsCard from './NewsCard';
import VideoCard from './VideoCard';
import { getVid } from '../constants/constants';

const breakpointColumns = {
    default: 4,
    1100: 3,
    800: 2,
    500: 1
};

class NewsDisplay extends Component {

    handleLoad = () => {
        this.props.loadMore();
    }

    render() {
        const { data, itemCount, error } = this.props;
        return (
            error
            ? <Error error={error} />

            :<div>
                <Masonry
                    breakpointCols={breakpointColumns}
                    className='masonry'
                    columnClassName='masonry-grid-column'>
                    {data !== undefined && data.json.slice(0, itemCount).map((item, index) => (
                        getVid(item)
                            ? <VideoCard src={getVid(item)} info={item} key={index} />
                            : <NewsCard info={item} key={index} />
                    ))}
                </Masonry>

                <div className='more-results'>
                    {itemCount < 25 && data !== undefined &&
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
    data: PropTypes.object,
    itemCount: PropTypes.number.isRequired, 
    error: PropTypes.object
};

export default NewsDisplay;
