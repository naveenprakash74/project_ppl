import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routerr from './route/route';

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk';

const store = createStore(rootReducer,applyMiddleware(thunk));
ReactDOM.render(<Router><Provider store={store}><Routerr /></Provider></Router>, document.getElementById('root'));