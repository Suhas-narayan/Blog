const {Schema , model} = require("mongoose")

const postSchema= new Schema({
    title: {type: String ,required:true},
    category: {type: String ,enum:["Civil","Criminal","Education","Entertainment","Art","Unvategorized"], message:"{VALUE is not supported }"},
    description: {type: String ,required:true},
    thumbnail: {type: String ,required:true},

    creator: {type: Schema.Types.ObjectId ,ref:"User"}

    // title: {type: String ,required:true},


},{timestamps:true})

module.exports = model("Post",postSchema)