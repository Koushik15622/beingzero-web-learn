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
module.exports.update = function(req,res){
    var q={course:req.body.course};
    var n={$set :{course:req.body.nc,articles:req.body.na}};
    model.updateOne(q,n,function(err,res){
        if(err)
            console.log("error update");
        console.log("updated");
        //res.redirect("/crud");
    });
    res.redirect("/crud");
}

};