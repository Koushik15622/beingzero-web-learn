const model = require("../models/model");
module.exports.create = function(req,res){
    var a=new model({
        course:req.body.course,
        articles:req.body.arts
    });
    a.save();
    res.redirect("/crud");
};

module.exports.getall = function(req,res){
    var q={};
    model.find(q,function(err,allarr){
        res.json(allarr);
    });

};