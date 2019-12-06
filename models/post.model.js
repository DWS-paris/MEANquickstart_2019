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
        title: String,
        body: String
    });
//


/*
Export
*/
    module.exports =  mongoose.model('post', MongooseSchema);
//