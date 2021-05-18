var mongoose = require('mongoose');
var tblSchema = new mongoose.Schema({
  course : {type: String, require:true},
  articles: Number,
  ideleted : Boolean
})

module.exports=mongoose.model('course',tblSchema);
