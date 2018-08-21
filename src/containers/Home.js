import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { fetchNews } from '../actions/actions';
import { getEndpoint } from '../constants/constants';
// Imported Components:
import Header from '../components/Header';
import NewsDisplay from '../components/NewsDisplay';


class Home extends Component {

    // Fetch when click on different category buttons
    handleFetch = (endpoint) => {
        this.props.fetchNews(endpoint)
    }

    renderErrorMessage() {
        const { errorMessage } = this.props
        if (!errorMessage) {
            return null
        }

        return (
            <div>
                {errorMessage}
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>REDDIT NEWS</h1>
                <Header handleFetch={this.handleFetch} />
                <Route path='/:type' component={NewsDisplay} />
            </div>
        )
    }
}

Home.Proptypes = {
    fetchNews: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    data: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
    data: state.data
});

export default withRouter(connect(mapStateToProps, { fetchNews })(Home));