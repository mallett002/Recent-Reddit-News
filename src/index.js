import React from "react";
import { render } from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import Root from './containers/Root';
import store from './store/configureStore';

render(
    <Provider store={store} >
         <Root />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
