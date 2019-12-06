/* 
Imports
*/
let CryptoJS = require("crypto-js");
//

/*
Service definition
*/
    const cryptData = (input, type = 'string') => {
        // Encrypt
        let output = undefined;

        // Switch data type
        switch(type){
            case 'string':
            output = CryptoJS.AES.encrypt(input, process.env.CRYPTO_KEY);
            break;

            case 'object':
            output = CryptoJS.AES.encrypt(JSON.stringify(input), process.env.CRYPTO_KEY);
            break;
        }


        // Return crypted output
        return output.toString();
    }

    const decryptData = (item, ...inputs) => {
        // Loop on values
        for( let value of inputs ){
            // Loop on object
            for( let prop in item ){
                if(value === prop){
                    let crypted  = CryptoJS.AES.decrypt(item[prop].toString(), process.env.CRYPTO_KEY);
                    item[prop] = crypted.toString(CryptoJS.enc.Utf8);
                }
            }
        }

        // Return decrypted item
        return item;
    }
// 


/*
Export service fonctions
*/
    module.exports = {
        cryptData,
        decryptData
    };
//