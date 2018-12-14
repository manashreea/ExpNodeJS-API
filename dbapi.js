class apidata{
    constructor(self){
        this.self = self;
    }

    dbConnectTo(){
        var datamongo = require('./datamongo');
        datamongo.getConnection(function(db){
            console.log(db,'dbdbdbdbdbdbdbdbdb');
        });
    }
}

module.exports = apidata;