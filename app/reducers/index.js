'use strict';
import { combineReducers } from 'redux';

export default combineReducers({
    user
});

function user(state = {}, action) {
    switch (action.type) {

        default:
            return state;
    }
}