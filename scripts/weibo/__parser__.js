import cheerio from 'cheerio';

export default async html => {
    const result = [];
    let $ = cheerio.load(html);
    $('div[action-type="feed_list_item"]').each(function() {
        let $this = $(this);
        let mid = $this.attr('mid');
        let weibo = $this.find('.WB_info').first('a').text().trim();
        let date = $this.find('.WB_from').find('a[node-type="feed_list_item_date"]').attr('title');
        let text = $this.find('.WB_text').text().trim();
        let html = $this.find('.WB_text').html().trim();

        result.push({ mid, weibo, date, text, html});
    });

    //console.log('parser> ', html.substring(0, 100), result);
    return result;
};
