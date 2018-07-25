'use strict';
const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const ReactDOM = require('react-dom');
const Provider = require('react-redux').Provider;
const routers = require('./routers.jsx');

import configureStore from './store/configureStore';

ReactDOM.render(
<Provider store={configureStore({})}>
    <Router history={ReactRouter.browserHistory}>
        { routers }
    </Router>
</Provider>, document.getElementById('app'));