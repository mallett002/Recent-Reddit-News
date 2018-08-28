import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// Import other container components that Root will render based on Route URL
import Home from './Home' ;

class Root extends Component {
    render() {
        return (
            <Router>
                <Route path='/' component={Home} />
            </Router>
        )
    }

}


Root.proptypes = {
    store: PropTypes.object.isRequired
}

export default Root;