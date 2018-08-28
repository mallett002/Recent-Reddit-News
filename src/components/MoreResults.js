import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { getColor } from '../constants/constants';

const MoreResults = ({ subreddit, loadMore }) => (
    <Button id='moreResults'
        style={{backgroundColor: getColor(subreddit), color: "white"}}
        onClick={loadMore}
        variant="contained">
        Load More Results
    </Button>
);

MoreResults.propTypes = {
    subreddit: PropTypes.string.isRequired,
    loadMore: PropTypes.func.isRequired
};

export default MoreResults;