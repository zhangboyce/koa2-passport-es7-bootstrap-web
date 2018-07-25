'use strict';
const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const ReactDOM = require('react-dom');
const Provider = require('react-redux').Provider;
const routers = require('./routers.jsx');
const __config__ = require('../common/__config__');
import configureStore from './store/configureStore';

__config__.set(window.__CONFIG__);

ReactDOM.render(
<Provider store={configureStore({})}>
    <Router history={ReactRouter.browserHistory}>
        { routers }
    </Router>
</Provider>, document.getElementById('app'));