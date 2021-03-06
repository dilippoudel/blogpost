import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "font-awesome/css/font-awesome.css";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index'
import App from './components/app';
import thunk from 'redux-thunk';
const store = createStore(reducers,applyMiddleware(thunk));
ReactDOM.render(<Provider store = {store}>
    <App/>
</Provider>,
document.getElementById('root'))