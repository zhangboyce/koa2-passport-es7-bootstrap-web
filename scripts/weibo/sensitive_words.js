let mongoUrl = "mongodb://192.168.100.83:27017/dataplatform";
let mongoClient = require('mongodb').MongoClient;
let db;

const words = ["国家级", "世界级", "最高级", "最佳", "最大", "第一", "唯一", "首个", "首选", "最好", "精确", "顶级", "最高", "最低", "最具", "最便宜", "最新", "最先进", "最大程度", "最先进科学", "国家级产品", "填补国内空白", "绝对", "独家", "首家", "最先进", "第一品牌", "金牌", "名牌", "优秀", "最先", "全网销量第一", "全球首发", "全国首家", "全网首发", "世界领先", "顶级工艺", "最新科学", "最新技术", "最先进加工工艺", "最时尚", "极品", "顶尖", "终极", "最受欢迎", "王牌", "销量冠军", "NO.1", "Top1", "极致", "永久", "掌门人", "领袖品牌", "独一无二", "绝无仅有", "前无古人", "史无前例", "万能"];
let weibos = ['巴黎欧莱雅', '欧莱雅美发', 'CalvinKlein', 'TommyHilfiger', '美宝莲纽约', '雪花秀Sulwhasoo', 'ETUDEHOUSE伊蒂之屋'];

import fs from 'fs';

(async () => {
    if (!db) {
        db =  await mongoClient.connect(mongoUrl);
    }

    for (let i=0; i<weibos.length; i++) {
        let weibo = weibos[i];
        let articles = await db.collection('weibo_articles').find({ weibo: weibo }).sort({ date: -1 }).toArray();

        let swas = [];
        articles.forEach(article => {
            let sws = [];
            let text = article.text.replace(/\s/g, '');
            let date = article.date;

            words.forEach(word => {
                if (text.includes(word)) {
                    sws.push(word);
                }
            });

            if (sws.length != 0) {
                swas.push({ date, text, sws });
            }
        });

        if (swas.length != 0) {
            let content = swas.map(it => [it.date, it.text, it.sws.join(' ')].join(', ')).join('\n');
            fs.writeFileSync(__dirname + '/dist/' + weibo + '.txt', content);

            console.log(weibo + ',' + content);
        } else {
            console.log(weibo + ', no sensitive words.')
        }
    }

    db.close();
})();