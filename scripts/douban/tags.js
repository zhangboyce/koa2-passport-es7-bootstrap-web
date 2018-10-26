/**
 * Created by Boyce on 18/7/27.
 */
import cheerio from 'cheerio';
import fetch from 'node-fetch';
const mongoClient = require('mongodb').MongoClient;

(async () => {
    const mongoUrl = 'mongodb://192.168.100.83:27017/dataplatform';
    const db = await mongoClient.connect(mongoUrl);

    const url = 'https://book.douban.com/tag/?view=type';
    const html = await fetch(url);
    const text = await html.text();
    const $ = cheerio.load(text);

    const tags = [];
    $('div.article').find('.tag-title-wrapper').each(function() {
        const $category = $(this);
        const category = $category.attr('name');
        const $table = $category.next();
        $table.find('td').each(function() {
            const $this = $(this);
            const name = $this.find('a').text();
            const count = $this.find('b').text().replace(/\((\d+)\)/, '$1');
            tags.push({ category, name, count });
        });
    });

    console.log(tags);
    await db.collection('douban_tags').insertMany(tags);
    db.close();

})();