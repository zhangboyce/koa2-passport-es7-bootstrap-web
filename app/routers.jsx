'use strict';

import React, { Component } from 'react';
import { Route } from 'react-router';
import App from './App.jsx';

import HomeContainer from './containers/HomeContainer.jsx';

module.exports = (
    <Route component={ App }>
        <Route path="/home" component={ HomeContainer } >
        </Route>
    </Route>
);