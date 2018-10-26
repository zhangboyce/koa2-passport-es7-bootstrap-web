import fetch from 'isomorphic-fetch';
import cheerio from 'cheerio';
import __saver__ from './__saver__';

let options = {
    method: 'GET',
    headers: {
        'x-requested-with': 'XmlHttpRequest',
        "Accept":" text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Encoding":" gzip, deflate, br",
        "Accept-Language":" zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7",
        "Cache-Control":" max-age=0",
        "Cookie": "SINAGLOBAL=7342542449704.836.1490694661136; UM_distinctid=1647d02bd31778-0637cfa0c860cf-163e6950-fa000-1647d02bd3290; _s_tentry=-; SCF=AldCAz_vY_l6RLZ8zl1a0-2LiA4QW8YhmKMbWRRc93kkxOS_NpJTeKDrxdGdww0v7LC4875Pee2DHj3Pp62dyHU.; SUB=_2A2521fZqDeRhGeRI6lMU9CvOzzuIHXVVo2CirDV8PUNbmtBeLVf3kW9NUt8YMB-00tWni31jvnASeAHduRWoHjXP; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WWYhdrDjnPru1JuVcgZuSS35JpX5KMhUgL.FozceK2fSh-EShM2dJLoIE48H8H2x-ylHHS8i--Xi-ihiKyWi--RiK.EiKnEi--Xi-z4iKyFi--fi-zpiKyF; SUHB=09Ps60CL2mEPfZ; UOR=news.china.com.cn,widget.weibo.com,login.sina.com.cn; Apache=8125432133424.875.1540458051673; ULV=1540458051728:10:1:1:8125432133424.875.1540458051673:1535531346692; WBStorage=e8781eb7dee3fd7f|undefined",
        "Connection":" keep-alive",
        "Host":" s.weibo.com",
        "Upgrade-Insecure-Requests":" 1",
        "User-Agent":" Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
    },
    credentials: 'include'
};

let crawl = async (url) => {
    return await fetch(url, options);
};

let genUrls = (keyword, pages) => {
    let urls = [];
    for (let i=1; i<=pages; i++) {
        let url = `https://s.weibo.com/weibo?q=${ encodeURIComponent(keyword) }&nodup=1&page=${ i }`;
        urls.push(url);
    }
    return urls;
};

let keywords = {
    '药妆': 50,
    '医美': 50,
    '韩束': 50,
    'Home Facial Pro': 31
};

(async () => {
    for (let key in keywords) {
        let urls = genUrls(key, keywords[key]);
        for (let i=0; i<urls.length; i++) {
            let url = urls[i];
            let result = await crawl(url);
            let html = await result.text();

            let results = [];
            let $ = cheerio.load(html);
            $('div[action-type="feed_list_item"]').each(function() {
                let $this = $(this);
                let mid = $this.attr('mid');
                let $content = $this.find('p[node-type="feed_list_content"]');
                let content = $content.text();
                let nickname = $content.attr('nick-name');

                results.push({ key, content, nickname, mid });
            });

            console.log('crawled >>>>>', key, url, results.length);
            await __saver__(results);
        }
    }

})();
