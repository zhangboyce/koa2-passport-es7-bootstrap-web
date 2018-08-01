import { get, post } from  './__fetch__';
import * as types from './ActionTypes';

export function wechatFeedsources() {
    return dispatch => {
        get('/api/wechat/feedsources').then(json => {
            dispatch({
                type: types.WECHAT_FEEDSOURCES,
                data: json
            });
        });
    };
}