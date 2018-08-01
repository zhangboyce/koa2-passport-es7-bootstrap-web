let mongoClient = require('mongodb').MongoClient;
let mongoUrl = "mongodb://192.168.100.83:27017/dataplatform";
let db;

export default async (results = []) => {
    if (!results || results.length == 0) {
        console.warn('== No results to saver.');
        return;
    }

    if (!db) {
        db =  await mongoClient.connect(mongoUrl);
    }

    //await db.collection('weibo_articles').insertMany(results);
    var bulkUpdateOps = results.map(function(doc) {
        return {
            "updateOne": {
                "filter": { "mid": doc.mid },
                "update": { "$set": doc },
                "upsert": true
            }
        };
    });

    await db.collection('weibo_articles').bulkWrite(bulkUpdateOps);


    //console.log('saver> ', results.length);
};