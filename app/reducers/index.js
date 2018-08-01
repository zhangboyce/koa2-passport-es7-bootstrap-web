'use strict';
import { combineReducers } from 'redux';
import * as types from '../actions/ActionTypes';

export default combineReducers({
    user,
    wechatFeedsources
});

function user(state = {  }, action) {
    switch (action.type) {
        case types.USER_INFO: {
            return action.data;
        }
        default:
            return state;
    }
}

function wechatFeedsources(state = [], action) {
    switch (action.type) {
        case types.WECHAT_FEEDSOURCES: {
            return action.data;
        }
        default:
            return state;
    }
}