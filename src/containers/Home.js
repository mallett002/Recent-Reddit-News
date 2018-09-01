import React, {Component} from 'react';
import PropTypes from 'prop-types';
// Imported Redux Tools:
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { fetchNews } from '../actions/actions';
// Imported Components:
import Header from '../components/Header';
import Loading from '../components/Loading';
import NewsDisplay from '../components/NewsDisplay';
// Imported constants:
import { getEndpoint } from '../constants/constants';


class Home extends Component {
    state = {
        itemCount: 10
    }

    // Fetch world news when component mounts
    componentDidMount() {
        this.props.fetchNews(getEndpoint('worldnews'));
    }

    // Fetch when click on different category buttons
    handleFetch = (endpoint) => {
        this.setState({ itemCount: 10 });
        this.props.fetchNews(endpoint);
    }

    handleLoad = () => {
        const { itemCount } = this.state;
        if (itemCount >= 25) {
            this.setState({ itemCount: 25});
        }
        this.setState({ itemCount: itemCount + 10 });
    }

    render() {
        const { data, error, isLoading }  = this.props;
        const { itemCount } = this.state;
        return (
            <div className='app'>

                <div className='title-wrapper'>
                    <h1 className='title'>
                        <span className='recent'>REDDIT</span> 
                        <span className='news'>NEWS</span>
                    </h1>
                </div>
                
                <Header handleFetch={this.handleFetch} />

                {isLoading
                ? <Loading />

                : <Route path='/:type'
                    render={(props) => <NewsDisplay {...props} 
                    data={data} 
                    error={error}
                    itemCount={itemCount} 
                    loadMore={this.handleLoad} />}
                />}

            </div>
        )
    }
}

Home.Proptypes = {
    fetchNews: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    data: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    error: state.errorMessage,
    data: state.data
});

export default withRouter(connect(mapStateToProps, { fetchNews })(Home));