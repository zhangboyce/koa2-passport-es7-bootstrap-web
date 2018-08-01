/**
 * Created by Boyce on 18/7/27.
 */
import cheerio from 'cheerio';
import __crawler__ from './__crawler__';
import __parser__ from './__parser__';
import __saver__ from './__saver__';
import { quene, INDEX, MBLOGLIST } from './__account__';

let __crawl__index___ = async url => {
    try {
        let result = await __crawler__(url);
        let html = await result.text();

        let $ = cheerio.load(html);
        let scripts = $('script');
        let content = $(scripts[scripts.length - 2]).html();
        content = content.replace('FM.view({', '{').replace('})', '}');

        let __html = JSON.parse(content).html;
        let results = await __parser__(__html);

        if (!results || results.length == 0) {
            console.log('No results', url);
            quene.__push__(url);
            return;
        }
        await __saver__(results);
        console.log('crawled ', results.length , url)
    } catch (e) {
        console.log(e, url);
        quene.__push__(url);
    }
};

let __crawl__mbloglist___ = async url => {
    try {
        let result = await __crawler__(url);
        let res = await result.json();
        let results = await __parser__(res.data);
        if (!results || results.length == 0) {
            console.log('No results', url);
            quene.__push__(url, MBLOGLIST);
            return;
        }
        await __saver__(results);
        console.log('crawled ', results.length , url)
    } catch (e) {
        console.log(e, url);
        quene.__push__(url, MBLOGLIST);
    }
};

(async () => {
    let i = 0;
    let n = quene.__length__();
    while (quene.__length__() > 0) {
        try {
            let __url__ = quene.__pop__();
            __url__.key == INDEX ?
                await __crawl__index___(__url__.url) :
                await __crawl__mbloglist___(__url__.url);

            console.log('crawling...', n, quene.__length__(), ++i)
        } catch (e) {
            console.error(e);
        }
    }

})();