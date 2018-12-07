class gplacemap{
    constructor(self){
        this.self = self;
    }

    getInitDetails(req,res){
        var objDemo = [
            {
                id:1000,
                name:'komal ghar',
                address:'mumbai'
            },
            {
                id:5000,
                name:'dinesh joshi',
                address:'pune'
            },
            {
                id:3000,
                name:'rucha datta',
                address:'delhi'
            }];
            res.send({
                    valid:true,
                    data:JSON.stringify(objDemo),
                    message:"success"
                });
    }

    getPlaceDetailsByContactNo(req,res) {
        var ggmapClient = require('@google/maps').createClient({
            key: 'AIzaSyCPId98ABo5vkuous8ddXB_sFqSQsXwkj4',
            Promise : Promise
        });
        let reqParams = req.params;
    
        ggmapClient.findPlace({
            input:reqParams.contactno,
            inputtype: 'phonenumber'
        }).asPromise()
        .then(
            (response) => {
                console.log('--respons.result---respons.result--',response);
                res.send({
                    valid:true,
                    data:response,
                    message:"success"
                });
            })
        .catch(
            (err)=> {
                console.log('err--response--err',err);
                res.send({
                    valid:false,
                    data:err,
                    message:"failed"
                });    
            }
        );
    }

    getPlaceDetailsByArea(req,res) {
        var ggmapClient = require('@google/maps').createClient({
            key: 'AIzaSyCPId98ABo5vkuous8ddXB_sFqSQsXwkj4',
            Promise : Promise
        });

        let reqParams = req.params;
    
        ggmapClient.findPlace({
            input:reqParams.placename,
            inputtype: 'textquery'
        }).asPromise()
        .then(
            (response) => {
                let candplace = response.json.candidates;
                console.log(candplace,'--respons.result---respons.result--',response.json);                
                ggmapClient.place({
                    placeid:candplace[0].place_id,
                    language:'en'
                }).asPromise()
                .then((response) =>            {
                    console.log('--respons.result---respons.result--',response.json);                
                    res.send({
                        valid:true,
                        data:response.json,
                        message:"success"
                    })
                })
                .catch(
                    (err)=> {
                        console.log('err--response--err',err);
                        res.send({
                            valid:false,
                            data:err,
                            message:"failed"
                        });    
                    }
                );
            })
        .catch(
            (err)=> {
                console.log('err--response--err',err);
                res.send({
                    valid:false,
                    data:err,
                    message:"failed"
                });    
            }
        );
    }    
}

module.exports = gplacemap;