import "./_req";
import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import App from './containers/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers/index';


let store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();