/*
Import
*/
    const mongoose = require('mongoose');
    const { Schema } = mongoose;
    const jwt = require('jsonwebtoken');
    const bcrypt = require('bcryptjs');
//

/*
Definition
*/
    const identitySchema = new Schema({
        email: { unique: true, type: String },
        password: String,
        isValidated: { type: Boolean, default: false },
        creationDate: { type: Date, default: new Date() },
        lastConnection: String
    });
//

/*
Methode
*/
    identitySchema.methods.generateJwt = (user) => {
        console.log(user)
        // set expiration
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 59);

        const jwtObj = {
            _id: user._id,
            creationDate: user.creationDate,
            lastConnection: user.lastConnection,
            expireIn: '10s',
            exp: parseInt(expiry.getTime() / 100, 10)
        };

        console.log(jwtObj)

        // JWT creation
        return jwt.sign(jwtObj, process.env.JWT_SECRET )
    };
//

/*
Export
*/
    const IdentityModel = mongoose.model('identity', identitySchema);
    module.exports = IdentityModel;
//