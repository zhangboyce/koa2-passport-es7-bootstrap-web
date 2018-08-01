'use strict';

import React, { Component } from 'react';
import { Route } from 'react-router';
import App from './App.jsx';

import WechatContainer from './containers/WechatContainer.jsx';
import WeiboContainer from './containers/WeiboContainer.jsx';
import InstagramContainer from './containers/InstagramContainer.jsx';

module.exports = (
    <Route component={ App }>
        <Route path="/" component={ WechatContainer } />
        <Route path="/weibo" component={ WeiboContainer } />
        <Route path="/instagram" component={ InstagramContainer } />
    </Route>
);