/* 
Definition
*/
    const Mandatories = {
        register: ['email', 'password', 'firstname', 'lastname'],
        login: ['email', 'password'],
        post: ['title', 'body'],
        comment: ['postId', 'content'],
        media: ['filename', 'filetype', 'value', 'total']
    };
//

/* 
Export
*/
    module.exports = Mandatories;
//