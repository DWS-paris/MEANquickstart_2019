/* 
Import
*/
    const AWS = require('aws-sdk');
//

/* 
Set up AWS
*/
    // Connection
    AWS.config.update({
        accessKeyId: process.env.SPACES_ACCESS_KEY_ID,
        secretAccessKey: process.env.SPACES_SECRET_ACCESS_KEY
    });

    // Set Spaces configuration
    const spacesEndpoint = new AWS.Endpoint(process.env.SPACES_BUCKET_ENDPOINT);
    const awsS3 = new AWS.S3({ endpoint: spacesEndpoint });

    // Define file slug
    const slug = source.filename.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g, "_").replace(/#/g, "_").replace(/["'‘’(){}]/g, "-");

    // Define file format
    const decodeFile = ( souorce ) => {
        // Switch file type
        switch(source.filetype){
            case `image/png`:
                return {
                    file: new Buffer.from(source.value.replace(/^data:image\/png;base64,/, ""), 'base64'),
                    type: `image/png`,
                    ext: `png`,
                    name: slug
                }
            break;

            case `image/jpeg`:
                return {
                    file: new Buffer.from(source.value.replace(/^data:image\/png;base64,/, ""), 'base64'),
                    type: `image/jpeg`,
                    ext: `png`,
                    name: slug
                }
            break;

            default:
            break;
        }
    }
//

/* 
Meethod
*/
    const createItem = (req) => {
        return new Promise( (resolve, reject) => {
            const base64Data = decodeFile(req.body);
        });
    };
//

/* 
Export
*/
module.exports = { createItem };