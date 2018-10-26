let mongoUrl = "mongodb://192.168.100.83:27017/dataplatform";
let mongoClient = require('mongodb').MongoClient;
let db;
import fs from 'fs';
import nodejieba from 'nodejieba';
nodejieba.load({
    userDict: __dirname + '/userdict.utf8',
});

(async () => {
    if (!db) {
        db =  await mongoClient.connect(mongoUrl);
    }
    let keywords = ['药妆', '医美', '韩束', 'Home Facial Pro'];
    let stopWords = fs.readFileSync(__dirname + '/stopWords.utf8', 'utf-8').split('\n').filter(Boolean);

    for (let i=0; i<keywords.length; i++) {
        let key = keywords[i];
        let articles = await db.collection('weibo_articles').find({ key: key }).sort({ date: -1 }).toArray();

        let results = [];
        articles.forEach(article => {
            let text = article.content.replace(/\s/g, '');
            let result = nodejieba.cut(text);
            results.push(...result);
        });

        let stat = results
            .filter(it => (stopWords.indexOf(it) == -1) && it.trim())
            .reduce((o, k) => {
                k in o ? o[k]++ : (o[k] = 1);
                return o;
        },{});

        let sortable = [];
        for (let key in stat) {
            sortable.push([key, stat[key]]);
        }

        sortable.sort(function(a, b) {
            return b[1] - a[1];
        });

        console.log('stat: ', sortable);

        let text = '';
        sortable.forEach(it => {
            text += (it[0] + ': ' + it[1] + '\n');
        });

        fs.writeFileSync(__dirname + '/dist/' + key + '.txt', text);
        console.log('text: ', text);
    }

    db.close();
})();