
import React from 'react'
import './style.scss'
import { render } from 'react-dom'
import App from './components/App.jsx'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootRedecer from './store/reducers'
import logger from 'redux-logger'

const store = createStore(rootRedecer, applyMiddleware(logger))

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'))


