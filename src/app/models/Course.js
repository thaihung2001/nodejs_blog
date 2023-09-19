const mongoose = require('mongoose');

const mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;
const Course = new Schema({
    name:  { type: String, required:true, },
    content: {type: String, },
    image: { type: String, },
    videoId: { type:String, required:true,},
    level:{type: String}
   /*  slug:{type: String, slug:'name', unique:true }, */
  });


  Course.plugin(mongooseDelete, { deletedAt : true,
    overrideMethods: 'all', });
  module.exports=mongoose.model('Course', Course);