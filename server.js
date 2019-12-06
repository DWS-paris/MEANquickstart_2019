/* 
Import
*/
    // NodeJS
    require('dotenv').config();
    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    const ejs = require('ejs');
    const bcrypt = require('bcryptjs');

    // Inner
    const mongoDB = require('./services/db.service');
    const Models = require('./models/index');
    const Mandatories = require('./services/mandatory.service')
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('./services/response.service');
    const { checkFields } = require('./services/request.service');
    const { cryptData, decryptData } = require('./services/crypto.service')
//

/* 
Config
*/
    // Declarations
    const server = express();
    const port = process.env.PORT;

    // Serrverr class
    class ServerClass{
        init(){
            // View engine configuration
            server.engine( 'html', ejs.renderFile );
            server.set( 'view engine', 'html' );

            // Static path configuration
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );

            //=> Body-parser
            server.use(bodyParser.json({limit: '10mb'}));
            server.use(bodyParser.urlencoded({ extended: true }));

            // Start server
            this.launch();
        };

        routes(){
            /* 
            API Router
            */
                // CRUD: create new user
                server.post('/api/register', (req, res) => {
                    // Check request body
                    if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, 'No body data provided') };

                    // Check fields in the body
                    const { miss, extra, ok } = checkFields( Mandatories.register , req.body);
                    //=> Error: bad fields provided
                    if (!ok) { sendFieldsError(res, 'Bad fields provided', miss, extra) }
                    else{

                        // Generate password hash
                        bcrypt.hash(req.body.password, 10)
                        .then( hashedPassword => {
                            console.log(hashedPassword)
                            // Create new identity
                            Models.identity.create({ email: req.body.email, password: hashedPassword })
                            .then( identity => {
                                // Create new user
                                Models.user.create({
                                    identity: identity.id,
                                    firstname: req.body.firstname,
                                    lastname: req.body.lastname
                                })
                                .then( user => sendApiSuccessResponse(res, 'User created', { identity, user }))
                                .catch( err => sendApiErrorResponse(res, 'User noot created', err))
                            })
                        })
                        .catch( bcryptError => sendApiErrorResponse(res, 'Bcrypt error', req.body))
                    };
                });

                /// LOGIN: user connection
                server.post('api/login', (req, res) => {
                    if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, 'No body data provided') };

                    // Check fields in the body
                    const { miss, extra, ok } = checkFields( Mandatories.login , req.body);
                    //=> Error: bad fields provided
                    if (!ok) { sendFieldsError(res, 'Bad fields provided', miss, extra) }
                    else{
                        Models.identity.findOne( { email: req.body.email }, (err, identity) => {
                            if( err ){
                                sendApiErrorResponse(res, 'Unknow user', err)
                            }
                            // Check user password
                            const validPassword = bcrypt.compareSync(req.body.password, identity.password);
                            
                            if(!validPassword){
                                sendApiErrorResponse(res, 'Bad password', null)
                            }
                            else{
                                // Get user infos
                                Models.user.findOne( { identity: identity.id }, (err, user) => {
                                    if( err ){
                                        sendApiErrorResponse(res, 'Unknow user', err)
                                    }
                                    else{
                                        sendApiSuccessResponse(res, 'User logged', { identity, user })
                                    }
                                } )
                            }
                        })
                    }
                })
            
                // CRUD: create item
                server.post('/api/:endpoint', (req, res) => {
                    if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, 'No body data provided') };

                    // Check fields in the body
                    const { miss, extra, ok } = checkFields( Mandatories[req.params['endpoint']] , req.body);
                    //=> Error: bad fields provided
                    if (!ok) { sendFieldsError(res, 'Bad fields provided', miss, extra) }
                    else{
                        // Create new object
                        Models[req.params['endpoint']].create( req.body )
                        .then( user => sendApiSuccessResponse(res, `${req.params['endpoint']} created!`, { identity, user }))
                        .catch( err => sendApiErrorResponse(res, `${req.params['endpoint']} not created...`, err))
                    }
                });

                // CRUD: read all items
                server.get('/api/:endpoint', (req, res) => {
                    Models[req.params['endpoint']].find( (err, data) => {
                        if(err){
                            sendApiErrorResponse(res, `${req.params['endpoint']} not found`, err)
                        }
                        else{
                            sendApiSuccessResponse(res, `${req.params['endpoint']} found!`, data)
                        }
                    })
                });

                // CRUD: read one item by id
                server.get('/api/:endpoint/:id', (req, res) => {
                    Models[req.params['endpoint']].findById( req.params['id'],  (err, data) => {
                        if(err){
                            sendApiErrorResponse(res, `${req.params['endpoint']} not found`, err)
                        }
                        else{
                            sendApiSuccessResponse(res, `${req.params['endpoint']} found!`, data)
                        }
                    })
                });

                // CRUD: update one item by id
                server.put('/api/:endpoint/:id', (req, res) => {
                    if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, 'No body data provided') };

                    // Check fields in the body
                    const { miss, extra, ok } = checkFields( Mandatories[req.params['endpoint']] , req.body);
                    //=> Error: bad fields provided
                    if (!ok) { sendFieldsError(res, 'Bad fields provided', miss, extra) }
                    else{
                        // Update object
                        Models[req.params['endpoint']].findOneAndUpdate( { _id: req.params['id'] } , req.body )
                        .then( user => sendApiSuccessResponse(res, `${req.params['endpoint']} updated!`, { identity, user }))
                        .catch( err => sendApiErrorResponse(res, `${req.params['endpoint']} not updated...`, err))
                    }
                });

                // CRUD: delete one item by id
                server.delete('/api/:endpoint/:id', (req, res) => {
                    Models[req.params['endpoint']].findOneAndDelete( {_id: req.params['id']},  (err, data) => {
                        if(err){
                            sendApiErrorResponse(res, `${req.params['endpoint']} not deleted`, err)
                        }
                        else{
                            sendApiSuccessResponse(res, `${req.params['endpoint']} deleted!`, data)
                        }
                    })
                });
            //

            /* Front router */
            server.get('/',  (req, res) => res.render('index') );
        };

        launch(){
            // Init Routers
            this.routes();

            // Connect MongoDB
            mongoDB.initClient()
            .then( db => {
                // Launch server
                server.listen(port, () => console.log(`Server is running on port ${port}`))
            })
            .catch( mongooseError => console.log(mongooseError));
        };
    }
//

/* 
Start
*/
    new ServerClass().init();
//