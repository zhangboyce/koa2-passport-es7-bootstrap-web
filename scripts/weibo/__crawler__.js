import fetch from 'isomorphic-fetch';
import __parser__ from './__parser__';

let options = {
    method: 'GET',
    headers: {
        'x-requested-with': 'XmlHttpRequest',
        "Accept":" text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Encoding":" gzip, deflate, br",
        "Accept-Language":" zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7",
        "Cache-Control":" max-age=0",
        "Cookie": "SINAGLOBAL=7342542449704.836.1490694661136; _s_tentry=www.baidu.com; Apache=9221974929874.725.1525774909913; ULV=1525774909920:8:1:1:9221974929874.725.1525774909913:1523334468349; YF-Page-G0=59104684d5296c124160a1b451efa4ac; YF-Ugrow-G0=9642b0b34b4c0d569ed7a372f8823a8e; UM_distinctid=1647d02bd31778-0637cfa0c860cf-163e6950-fa000-1647d02bd3290; WBtopGlobal_register_version=2e7679c973813872; login_sid_t=cb4ac410e608219d0e390a4d0cff6728; cross_origin_proto=SSL; YF-V5-G0=b1e3c8e8ad37eca95b65a6759b3fc219; UOR=news.china.com.cn,widget.weibo.com,login.sina.com.cn; wb_view_log_2611545247=2560*14401; wb_view_log_1645385313=2560*14401; WBStorage=e8781eb7dee3fd7f|undefined; wb_view_log=2560*14401; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WWYhdrDjnPru1JuVcgZuSS35JpX5K2hUgL.FozceK2fSh-EShM2dJLoIE48H8H2x-ylHHS8i--Xi-ihiKyWi--RiK.EiKnEi--Xi-z4iKyFi--fi-zpiKyF; ALF=1564626981; SSOLoginState=1533090982; SCF=AldCAz_vY_l6RLZ8zl1a0-2LiA4QW8YhmKMbWRRc93kkFSusQhqlUELgt2SRQmJnxtiD4m66RFm7wdRMx7YaiPk.; SUB=_2A252ZWz3DeRhGeRI6lMU9CvOzzuIHXVVE9k_rDV8PUNbmtBeLVjykW9NUt8YMEoXa730PAG-9cEQM11QauhsBUro; SUHB=0y0IO3dDE4-E_v; un=jwjang@etude.co.kr",
        "Connection":" keep-alive",
        "Host":" www.weibo.com",
        "Upgrade-Insecure-Requests":" 1",
        "User-Agent":" Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
    },
    credentials: 'include'
};

export default async (url) => {
    return await fetch(url, options);
}
