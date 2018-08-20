import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchNews } from '../actions/actions';

class Home extends Component {

    componentDidMount() {
        const { fetchNews } = this.props;
        fetchNews();
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
                HOME
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