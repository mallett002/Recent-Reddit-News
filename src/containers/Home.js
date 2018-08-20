import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchNews } from '../actions/actions';
import { getEndpoint } from '../constants/constants';
// Imported Components:
import Header from '../components/Header';


class Home extends Component {

    // Fetch US News when component mounts
    componentDidMount() {
        this.props.fetchNews(getEndpoint('usNews'));
    }

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