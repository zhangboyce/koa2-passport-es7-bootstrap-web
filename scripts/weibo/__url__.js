export const __url__ = (id, name, page, extra = {}) => {
    let url = 'https://weibo.com/p/aj/v6/mblog/mbloglist?ajwvr=6&domain=100606&profile_ftype=1&is_all=1&pagebar=0&pl_name=Pl_Official_MyProfileFeed__25&id=1006062002262597&script_uri=/sulwhasoochina&feed_type=0&page=1&pre_page=1&domain_op=100606&__rnd=1533004542701';
    let __urls = url.split('?');
    let baseUrl = __urls[0];
    let querys = __urls[1];

    let params = {  };
    let __params = querys.split("&");
    __params.forEach(__param => {
        let __ps = __param.split('=');
        params[__ps[0]] = __ps[1];
    });

    params['id'] = id;
    params['script_uri'] = '/' + name;
    params['page'] = page;
    params['pre_page'] = page;

    params = Object.assign({}, params, extra);

    querys = "";
    for (let key in params) {
        querys += '&' + key + '=' + params[key];
    }

    return baseUrl + querys.replace('&', '?');
};

export const __first__ = (id, name, page, extra = {}) => {
    let _extra__ = Object.assign({}, { pagebar: 0 }, extra);
    return __url__(id, name, page, _extra__);
};

export const __second__ = (id, name, page, extra = {}) => {
    let _extra__ = Object.assign({}, { pagebar: 1 }, extra);
    return __url__(id, name, page, _extra__);
};

export const __urls__ = (id, name, page, extra = {}) => {
    let urls = [];
    urls.push(__first__(id, name, page, extra));
    urls.push(__second__(id, name, page, extra));
};

export const __main__ = (id, page) => {
    return `https://weibo.com/p/${ id }/home?is_search=0&visible=0&is_all=1&is_tag=0&profile_ftype=1&page=${ page }#feedtop`;
};
