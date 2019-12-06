/*
Import
*/
    const mongoose = require('mongoose');
    const { Schema } = mongoose;
//

/*
Definition
*/
    const MongooseSchema = new Schema({
        postId: String,
        content: String,
        author: String
    });
//


/*
Export
*/
    module.exports =  mongoose.model('comment', MongooseSchema);
//