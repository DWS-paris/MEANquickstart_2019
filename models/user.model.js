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
        identity: String,
        firstname: String,
        lastname: String
    });
//


/*
Export
*/
    module.exports =  mongoose.model('user', MongooseSchema);
//