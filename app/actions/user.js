import { get, post } from  './__fetch__';
import * as types from './ActionTypes';

export function getUserInfo() {
    return dispatch => {
        get('/api/getUserInfo').then(json => {
            dispatch({
                type: types.USER_INFO,
                data: json
            });
        });
    };
}