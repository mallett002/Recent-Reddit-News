import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Home extends Component {

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



const mapStateToProps = (state) => ({
    errorMessage: state.errorMessage,
})

export default withRouter(connect(mapStateToProps)(Home))