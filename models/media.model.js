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
        // Schema.org
        '@context' : { type: String, default: 'http://schema.org' },
        '@type' : { type: [ String ], default: ['MediaObject'] },

        // Object data
        url : String,
        name : String,
        contentSize : Number,
        encodingFormat : String,
        author : String,
        dateCreated : { type: Date, default: new Date() }
    });
//


/*
Export
*/
    module.exports =  mongoose.model('media', MongooseSchema);
//