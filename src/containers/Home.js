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
        const { data, errorMessage }  = this.props;
        console.log(data);
        return (
            <div>
                <h1>REDDIT NEWS</h1>
                <Header handleFetch={this.handleFetch} />

                {/*Tell User to select a category, or display the news*/}
                {data === undefined && !errorMessage 
                ? <p>Select a news category</p>
                : <Route path='/:type' component={NewsDisplay} />}
                {/*TODO <Error />  I'll make a component for rendering the error*/}
                
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