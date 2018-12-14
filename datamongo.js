'use strict';

const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoAPIUrl = 'mongodb://admin:admin@mancluster-shard-00-00-lhss4.mongodb.net:27017,mancluster-shard-00-01-lhss4.mongodb.net:27017,mancluster-shard-00-02-lhss4.mongodb.net:27017/demodb?ssl=true&replicaSet=ManCluster-shard-0&authSource=admin&retryWrites=true'; //'mongodb://localhost:27017/mydb';

function dataConnection(){}

dataConnection.getConnection = function(callback){
        //console.log(mongoClient,'---mongoClient---mongoClient---mongoClient--');
        mongoClient.connect(mongoAPIUrl,function(err,db){
            if(err){
                assert.equal(null,err);
                console.log('Database connection error found >>',err);
            }
            callback(db);
            console.log('Database connected!!',db.isConnected);
        })
}

module.exports = dataConnection;
